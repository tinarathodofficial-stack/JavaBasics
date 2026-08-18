---
title: "3. for loop"
description: "Repeating code a specific number of times."
order: 3
category: "Control Flow"
---

# Loops in JavaScript (The `for` loop)

Sometimes we need to perform the **same task again and again**.
For example, imagine we want to print numbers from `1` to `5`. Without a loop, we would have to blindly type:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

### What is a Loop?

A loop allows us to gracefully run the same block of code repeatedly until a specific condition tells JavaScript to actively stop!

In simple words, it tells JavaScript: *"Keep doing this task repeatedly until the condition is no longer true."*

#### The "Watering Plants" Analogy
Imagine you have to water 5 plants in a row. Instead of thinking about each plant as a completely different manual task, you simply follow the exact same process 5 times!

```text
Start
  ↓
Run the code (Water a plant)
  ↓
Check the condition (Are there any plants left to water?)
  │
 ┌┴─────────┐
Yes         No
 │           │
 ↓           ↓
Repeat      Stop
```

### Why Do We Need Loops?

Loops are necessary whenever we need to logically repeat an action. For example:
- Printing numbers from 1 to 10.
- Going through an enormous list of users.
- Displaying products on an eCommerce webpage.
- Searching through a massive collection of database data.

Instead of typing the same repetitive code manually, we write the code **once** inside a loop! This keeps our programs significantly shorter, cleaner, and extremely easier to maintain.

### The Core Keywords

To practically construct a standard `for` loop, you only really use one primary keyword:
- **`for`**: This rigidly alerts JavaScript that you are generating an automated counting loop. Strictly inside its attached parenthesis, you sequentially map out the initialization, condition, and update rules.

---

## Anatomy of the `for` Loop

The **`for` loop** is the most popular standard way to repeat code when you know *exactly* how many times you want it to run. 

It heavily relies on three core ingredients placed structurally inside the parenthesis `()`:

1. **Initialization:** Defines our starting counter (e.g., `let i = 1`)
2. **Condition:** Checks if we should keep running (e.g., `i <= 5`)
3. **Iteration (Update):** Updates the counter after each step (e.g., `i++` adds 1 to `i`) *(Note: `i++` is the **Unary Increment Operator** you learned about in the Operators lesson!)*

**Example Translation:** Let's beautifully translate our manual `console.log` example from the absolute top of the page directly into a flawless `for` loop!

```javascript
// Step 1: Start tracking at 1
// Step 2: Ensure it is less than or equal to 5
// Step 3: Add 1 every single time it runs
for (let i = 1; i <= 5; i++) {
    console.log(i); // This runs exactly 5 times naturally!
}
```

> **Simple idea:** `let i = 1` builds our tracking number. It executes the inner code block, and then `i++` adds `1` to it. It repeats this perfect circle continuously until `i` violates the strict condition and breaks!

### 🧪 Sandbox: for loop

Try modifying the loop below to aggressively print numbers from `1` to `20`, or intentionally see what breaks if you completely delete the `i++` updater step!

<div class="integrated-sandbox" data-code="for (let i = 1; i <= 5; i++) {\n    console.log(&quot;Watering plant number: &quot; + i);\n}\nconsole.log(&quot;Finished watering!&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Simple for loop</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>