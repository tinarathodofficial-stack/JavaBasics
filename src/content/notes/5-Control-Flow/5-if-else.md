---
title: "1. if, else, else if"
description: "Making decisions in JavaScript."
order: 1
category: "Control Flow"
---

# Conditional Statements

Conditional statements allow JavaScript to **make decisions based on a condition**. In simple words, we give JavaScript a condition and tell it exactly what to execute depending on whether that condition evaluates to `true` or `false`. 

You can think of it like making a decision in real life:
> **"If this happens, do this. Otherwise, do something else."**

For example, consider an everyday voting system where a person must be **18 or older** to vote:

```text
Is the person's age 18 or above?
          │
     ┌────┴────┐
    YES        NO
     │          │
     ▼          ▼
Can vote     Cannot vote
```

### Translating to Code

We translate this exact human logic directly into JavaScript code using the highly intuitive `if` and `else` keywords!

```javascript
let age = 20; // Try changing this number!

// "If this condition is magically true..."
if (age >= 18) {
    // ...run this block of code!
    console.log("You can vote!"); 
} 
// "Otherwise..."
else {
    // ...run this block of code instead!
    console.log("You cannot vote."); 
}
```

> **Simple idea:** The `if` statement checks the condition logically inside the parenthesis `()`. If it returns `true`, it naturally runs the code tucked securely inside the curly brackets `{}`. If it returns `false`, it completely skips it and moves straight down to the `else` block!

---

## The `else` Statement (The Backup Plan)

You can think of the `else` statement as the **default backup plan**. It doesn't have a condition attached to it in parenthesis `()`. It purely exists to catch literally anything that failed the initial `if` test!

### 🧪 Sandbox: if...else 
Try changing the age to `15` and running the code to see the `else` block automatically trigger!

<div class="integrated-sandbox" data-code="let age = 20;\n\nif (age >= 18) {\n    console.log(&quot;You are an adult.&quot;);\n} else {\n    console.log(&quot;You are a minor.&quot;);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Simple if/else</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## Multiple Conditions (`else if`)

Sometimes decisions are not perfectly black and white. What if you have *multiple* specific conditions you want to check?

We chain conditions together using `else if`! JavaScript will read them from top to bottom and execute **only the very first one** that is true. Everything else gets skipped!

### Example: Grading System
Let's build a system that assigns a letter grade based on a math test score:

```javascript
let score = 85;

if (score >= 90) {
    console.log("You got an A!");
} 
else if (score >= 80) {
    console.log("You got a B!"); // This one triggers! 85 is strictly greater than 80.
} 
else if (score >= 70) {
    console.log("You got a C!");
} 
else {
    // If absolutely none of the above are true, the backup plan runs.
    console.log("You failed the test.");
}
```

> **Simple idea:** You must always start with an `if`. You can optionally end with a single `else` backup plan. In the middle, you can squeeze in as many `else if` chains as you want!

### 🧪 Sandbox: else if

Try changing the score to `95`, `72`, or `50` to see which block of code JavaScript logically decides to run!

<div class="integrated-sandbox" data-code="let score = 85;\n\nif (score >= 90) {\n    console.log(&quot;Grade: A&quot;);\n} else if (score >= 80) {\n    console.log(&quot;Grade: B&quot;);\n} else if (score >= 70) {\n    console.log(&quot;Grade: C&quot;);\n} else {\n    console.log(&quot;Fail&quot;);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Multi-Condition else if</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
