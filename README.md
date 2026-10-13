# Practical Logic Toolkit 🧠

Small algorithms. Practical applications. Clean JavaScript.

**Practical Logic Toolkit** is a modular JavaScript library that transforms everyday rules into efficient, reusable software utilities. It brings together label transformation, circular fuel planning, and fair reward allocation in one developer-friendly project.

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow) ![Runtime](https://img.shields.io/badge/Runtime-Node.js-green) ![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Real-World Scenarios](#-real-world-scenarios)
- [Core Concepts](#-core-concepts)
- [How the System Works](#-how-the-system-works)
- [Key Features](#-key-features)
- [Examples](#-examples)
- [Complexity Analysis](#-complexity-analysis)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Learning Outcomes](#-learning-outcomes)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## 🎯 Project Overview

Practical Logic Toolkit contains three independent utilities:

| Module | Practical purpose | Core technique |
| :--- | :--- | :--- |
| **Label Exchange** | Transform paired labels | String manipulation |
| **Fuel Route Planner** | Find a viable starting point on a circular route | Greedy algorithm |
| **Fair Reward Allocator** | Distribute the minimum number of rewards fairly | Two-pass greedy algorithm |

Each module has a clear responsibility and can be imported independently or used through a shared entry point.

---

## 🌍 Real-World Scenarios

1. **Label Exchange**  
   Imagine a system that exchanges the leading characters of two short identifiers. This could be useful in simple naming transformations, paired code labels, or lightweight text-processing workflows.

2. **Fuel Route Planner**  
   Imagine a delivery vehicle traveling between fuel stations on a circular route. Every station provides a certain amount of fuel, and traveling to the next station consumes fuel.  
   The planner determines whether a complete journey is possible and, if so, identifies a feasible starting station.

3. **Fair Reward Allocator**  
   Imagine an event organizer distributing prizes to participants based on performance ratings. Everyone must receive at least one prize, and a participant with a higher rating than an immediate neighbor must receive more prizes.  
   The allocator calculates the minimum total required while respecting both neighboring relationships.

---

## 💡 Core Concepts

* **String manipulation**  
  Strings are immutable in JavaScript. The label utility creates new strings using character indexing and `slice()` instead of attempting to modify individual characters.

* **Greedy algorithms**  
  The fuel planner tracks the current fuel balance and skips starting positions that cannot reach the next station. If the total available fuel is sufficient to cover the total cost, a feasible starting point exists.

* **Two-pass array processing**  
  The reward allocator makes two passes through the ratings:
  1. A left-to-right pass enforces the rule for children whose ratings exceed those of their left neighbors.
  2. A right-to-left pass enforces the corresponding rule for right neighbors.  
  This satisfies both conditions without repeatedly recalculating the entire distribution.

---

## ⚙️ How the System Works

The project follows a simple modular design:
1. The caller supplies labels, fuel data, or ratings.
2. The relevant utility processes the input.
3. The function returns a transformed pair, a starting index, or a minimum reward total.
4. The caller can display the result, store it, or integrate it into another application.

The library does not require a database, external service, or third-party runtime dependency.

---

## ✨ Key Features

- **Modular architecture:** Each utility is maintained in its own file.
- **Reusable functions:** Import only the functionality you need.
- **Efficient processing:** Linear-time solutions for route planning and reward allocation.
- **Readable implementation:** Meaningful function and variable names.
- **Predictable results:** Functions return values instead of printing directly to the console.
- **No external dependencies:** Uses standard JavaScript and Node.js.
- **Built-in tests:** Validate typical cases and important edge conditions.

---

## 🧪 Examples

### Label Exchange
**Input:**
```js
swapLeadingCharacters("bit", "set");
```
**Output:**
```js
["sit", "bet"]
```
*(The first characters are exchanged while the remaining characters stay unchanged.)*

### Fuel Route Planner
**Input:**
```js
const fuel = [1, 2, 3, 4, 5];
const travelCost = [3, 4, 5, 1, 2];

findFuelRouteStart(fuel, travelCost);
```
**Output:**
```js
3
```
*(Station 3 is a feasible starting point using zero-based indexing. If the total available fuel is lower than the total travel cost, the function returns `-1`.)*

### Fair Reward Allocator
**Input:**
```js
allocateFairRewards([1, 0, 2]);
```
**Output:**
```js
5
```
*(One valid distribution is `[2, 1, 2]`, requiring five rewards.)*

For another example:
```js
allocateFairRewards([1, 2, 2]);
// Output: 4 (The distribution [1, 2, 1] satisfies the rules with four rewards.)
```

---

## 📊 Complexity Analysis

Let $n$ represent the number of stations or participants, as appropriate.

| Utility | Time complexity | Auxiliary space |
| :--- | :--- | :--- |
| **Label Exchange** | $O(1)$ for fixed-length labels | $O(1)$ for fixed-length labels |
| **Fuel Route Planner** | $O(n)$ | $O(1)$ |
| **Fair Reward Allocator** | $O(n)$ | $O(n)$ |

*(The reward allocator uses an auxiliary array to track the number of rewards assigned to each participant.)*

---

## 🛠️ Technologies

- **JavaScript (ES6+)** — implementation language.
- **Node.js** — runtime environment.
- **Node.js built-in test runner** — automated testing.
- **Git and GitHub** — version control and project hosting.

---

## 📁 Project Structure

```text
Practical-Logic-Toolkit/
├── src/
│   ├── index.js
│   ├── labelExchange.js
│   ├── fuelRoutePlanner.js
│   └── fairRewardAllocator.js
├── examples/
│   └── demo.js
├── test/
│   └── toolkit.test.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Install **Node.js 18** or a compatible newer release.

### 1. Clone the repository
```bash
git clone https://github.com/mirhamzarahman/Practical-Logic-Toolkit.git
cd Practical-Logic-Toolkit
```

### 2. Run the demonstration
```bash
npm run demo
```

### 3. Run the tests
```bash
npm test
```

### 4. Use the library in your code
```js
const {
    swapLeadingCharacters,
    findFuelRouteStart,
    allocateFairRewards
} = require("./src");

console.log(swapLeadingCharacters("bit", "set"));
console.log(findFuelRouteStart([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(allocateFairRewards([1, 0, 2]));
```

**Expected output:**
```text
[ 'sit', 'bet' ]
3
5
```

---

## 📚 Learning Outcomes

By exploring this project, developers can practice:
- Breaking a larger project into focused modules.
- Manipulating immutable strings in JavaScript.
- Applying greedy reasoning to circular route planning.
- Enforcing neighboring constraints with two directional passes.
- Analyzing time and space complexity.
- Writing reusable functions and automated tests.
- Designing a small Node.js library with a clean public interface.

---

## 🔮 Future Improvements

- Add TypeScript declarations and stronger input validation.
- Provide detailed route-planning diagnostics and fuel-balance reports.
- Add configurable reward policies for different event types.
- Publish the toolkit as an npm package.
- Add continuous integration with automated tests.
- Introduce benchmark tests for large datasets.
- Build a small web interface to visualize routes and reward distributions.

---

## 📄 License

This project is distributed under the **MIT License**. See the `LICENSE` file for details.

---

> Built as a practical demonstration of clean JavaScript, reusable software design, and efficient algorithms.
