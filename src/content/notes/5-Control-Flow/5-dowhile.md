---
title: "5. do...while loop"
description: "Executing code before checking the condition."
order: 5
category: "Control Flow"
---

# `do...while` Loop

The **`do...while` loop** is a unique and incredibly useful variation of the standard `while` loop. 

Unlike the standard `while` loop, the `do...while` loop **guarantees that your code will execute at least exactly one time** before it ever checks the logic condition!

In simple words:
> *"Do this task immediately right now. Once you finish, check the condition to see if you should do it again."*

### The Core Keywords

Every `do...while` loop strictly operates by bridging two completely separate keywords:
- **`do`**: This explicitly forces JavaScript to blindly run the exact block of code inside its curly brackets *at least once* before intentionally making any checks.
- **`while`**: Functionally pinned to the absolute end of the brackets, it meticulously evaluates whether the previous `do` block is legally allowed to aggressively repeat itself!

---

## Basic Structure

The skeleton structure physically flips the condition statement to the absolute bottom of the block:

```javascript
let counter = 1; // 1. Start outside

do {
    // 2. DO THIS IMMEDIATELY (runs without checking anything)
    
    counter++; // 3. Remember to update manually!
    
} while (condition); // 4. Check the condition LAST!
```

You can visualize how it forces JavaScript to run the task first:

```text
    Run the code (Action happens first!)
         ↓
    Update value
         ↓
   Check condition
         ↓
  Is it still true?
    ↓           ↓
   YES          NO
    ↓           ↓
  Repeat       Stop
```

### Translating to Code

Let's translate an explicit real-world example: **Playing an arcade game!** 
When you put a quarter in, you always get to play the game *at least once*. Only after the game is completely over does the machine check your coin balance to see if you are allowed to play *again*.

```javascript
let coins = 0; // Oh no, you have 0 coins!

do {
    // This code runs blindly, even though you have 0 coins!
    console.log("Playing the arcade game! 🕹️");
    
    coins--; // Subtract a coin
    
} while (coins > 0); 
// After playing, it realizes you are out of coins and securely stops the loop.

console.log("Game Over. Insert Coin.");
```

> **Simple idea:** If we had used a normal `while (coins > 0)` loop, the game would have **never** started because `0 > 0` is `false`. But because we explicitly used a `do` block, the machine blindly let you play one free game before it legally checked your balance at the bottom!

### 🧪 Sandbox: do...while loop

Try running the code exactly as it is to see the "free game" logic trigger! Then try manually changing the starting `coins` to `3` to cautiously watch it loop normally multiple times.

<div class="integrated-sandbox" data-code="let coins = 0;\n\ndo {\n    console.log(&quot;Playing the arcade game! 🕹️&quot;);\n    coins--;\n} while (coins > 0);\n\nconsole.log(&quot;Game Over. Insert Coin.&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Arcade do...while</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
