---
title: "6. break, continue"
description: "Controlling the flow inside loops."
order: 6
category: "Control Flow"
---

# `break` and `continue`

Sometimes, you logically need to manually intervene and abruptly stop a loop from running, or force it to skip a step entirely!

JavaScript provides two extremely powerful keywords to explicitly control loop behavior forcefully from the inside: **`break`** and **`continue`**.

### The Core Keywords

- **`break`**: The emergency stop button. It instantly terminates the loop completely and permanently exits the block entirely.
- **`continue`**: The skip button. It instantly skips the rest of the currently running loop step, and forces the loop to jump straight to the next iteration.

---

## 1. The `break` Keyword

We previously saw `break` tied firmly to `switch` statements to purposefully disable "fall-throughs". But `break` is equally incredibly useful inside standard loops!

If a strict condition is aggressively met, you can use `break` to brutally crash the loop and logically escape instantly, even if the primary loop condition was still actively `true`.

### Example: Searching for a match
Imagine we are searching for the number `3`. Once we find it, there is brutally no logical reason to keep wasting time searching the rest of the list!

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Checking number: " + i);
    
    if (i === 3) {
        console.log("Found it! Stopping the loop.");
        break; // Structurally kills the loop entirely right here!
    }
}
console.log("Loop firmly ended!");
```

---

## 2. The `continue` Keyword

What if you just want to explicitly bypass a single bad item, but structurally keep looping through the rest of the safe items? 

`continue` aggressively skips all remaining executing code in the current step and forces the loop to instantly jump up and restart at the absolute top using the very next updated value.

### Example: Skipping an item
Imagine we are printing a sequence of numbers, but we want to ignore the number `3`. Let's skillfully skip it!

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Explicitly skipping number 3!");
        continue; // Skips logging 3 and jumps rigidly to 4!
    }
    
    // Number 3 never actually reaches this line of code!
    console.log("Printing: " + i); 
}
```

> **Simple idea:** `break` effectively **destroys** the entire overall loop. `continue` merely destroys the **current turn** and immediately pushes forward to the next turn!

### 🧪 Sandbox: break and continue

Try physically swapping the exact `continue;` keyword below for the `break;` keyword and watch exactly how radically different the Console treats the logic structure!

<div class="integrated-sandbox" data-code="for (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        console.log(&quot;Action activated at 3!&quot;);\n        continue; // Change this natively to 'break' and hit Run!\n    }\n    console.log(&quot;Current number: &quot; + i);\n}\nconsole.log(&quot;Done looping globally!&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Loop Control</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
