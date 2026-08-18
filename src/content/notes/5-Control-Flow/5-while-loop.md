---
title: "4. while loop"
description: "Repeating code while a condition is true."
order: 4
category: "Control Flow"
---

# `while` Loop

The **`while` loop** is another powerful way to logically repeat a block of code in JavaScript.

It is highly useful when we want JavaScript to **keep repeating something as long as a condition strictly remains `true`**.

In simple words:
> *"While this specific condition is true, just keep doing this task over and over."*

Unlike a `for` loop, a `while` loop does not have its starting number, its check, and its update all written tightly together on the exact same line. Instead, we separate them manually:

1. **Create** a starting value outside the loop.
2. **Check** the condition.
3. **Run** the code inside if it evaluates to `true`.
4. **Update** the value manually inside the block.
5. **Check** the condition again.
6. **Stop** instantly when the condition hits `false`.

### The Core Keywords

Every `while` loop essentially relies exclusively on just one strict keyword:
- **`while`**: This keyword heavily commands JavaScript to loop the specific internal block of code endlessly as long as the logical condition nested securely inside its parenthesis naturally remains `true`.

---

## Basic Structure

The raw skeleton structure of a `while` loop logically looks like this:

```javascript
let counter = 1; // 1. Set the starting point outside

while (condition) {
    // 2. Run the code to repeat
    
    counter++; // 3. Crucial step: Remember to update the value manually!
}
```

The condition is explicitly checked *before* every single iteration of the loop. You can visualize the processing path like this:

```text
          Check condition
                ↓
        Is it still true?
          ↓           ↓
        YES           NO
         ↓             ↓
    Run the code      Stop
         ↓
    Update value
         ↓
   Check condition
      again
         │
         └──────────────→
```

### Translating to Code

Let's translate an explicit real-world example: **Eating slices of pizza!** You want to keep grabbing and eating slices *while* there are still slices left in the cardboard box.

```javascript
let slices = 4; // We start with 4 slices of pizza in the box

// "While the number of slices is strictly greater than 0..."
while (slices > 0) {
    console.log("Delicious! Eating a slice...");
    
    slices--; // Crucial step: we subtract 1 slice!
}

// Drops out here when slices hits 0!
console.log("The box is completely empty.");
```

> **⚠️ CRITICAL WARNING: The Infinite Loop**
> The most dangerous mistake you can make with a `while` loop is forgetting your update step (like totally forgetting to type `slices--`). If the condition is *always rigidly true* and never manually updates, your browser will lock up forever and completely crash!

### 🧪 Sandbox: while loop

Try changing the starting number of `slices` to `10` or `1` and hitting Run! Notice exactly how the while condition perfectly protects the logic.

<div class="integrated-sandbox" data-code="let slices = 4;\n\nwhile (slices > 0) {\n    console.log(&quot;Delicious! Eating a slice...&quot;);\n    slices--;\n}\n\nconsole.log(&quot;The box is completely empty!&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Pizza While Loop</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>