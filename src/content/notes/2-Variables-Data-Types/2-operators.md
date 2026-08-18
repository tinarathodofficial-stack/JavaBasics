---
title: "3. Operators"
description: "Operators are used to perform operations on variables and values."
order: 3
category: "Variables & Data Types"
---

# Operators in JavaScript

> **Definition:** Think of operators as the "action buttons" or "math symbols" of JavaScript. They take one or more values (which we call **operands**) and perform a specific action on them to give you a new result.

They are the fundamental building blocks of JavaScript because they allow you to actually *do* things with your data—like doing math, updating values, or putting variables through yes/no logic checks!

---

## 1. Arithmetic Operators
Arithmetic operators act just like the buttons on a basic calculator. They are used exclusively to perform mathematical calculations on numbers.

### 1.1 Addition (`+`)
Simply adds two numerical values together.

*let a = 10;*  
*let b = 5;*  
*console.log(a + b); // 15*

### 1.2 Subtraction (`-`)
Subtracts the second number from the first number.

*let a = 10;*  
*let b = 5;*  
*console.log(a - b); // 5*

### 1.3 Multiplication (`*`)
Multiplies two numbers together.

*let a = 10;*  
*let b = 5;*  
*console.log(a * b); // 50*

### 1.4 Division (`/`)
Divides the first number by the second number.

*let a = 10;*  
*let b = 5;*  
*console.log(a / b); // 2*

### 1.5 Modulus (Remainder) (`%`)
This one sounds complicated, but it's completely straightforward! When you divide two numbers, the **Modulus** operator doesn't give you the answer; instead, it gives you whatever value is **left over** (the remainder).

*let a = 10;*  
*let b = 3;*  
*console.log(a % b); // 1*  
*(Because 3 fits into 10 three times, hitting 9, leaving a remainder of exactly 1!)*

**Simple idea:** The modulus operator is incredibly useful in programming to check if a number is Even or Odd!  
*console.log(8 % 2); // 0 (Even - no remainder means it perfectly divides by 2!)*  
*console.log(9 % 2); // 1 (Odd)*

### 1.6 Exponentiation (`**`)
Raises the first number to the power of the second number.

*let a = 2;*  
*let b = 4;*  
*console.log(a \*\* b); // 16*

**Simple idea:** It essentially just multiplies the number by itself that many times in a row: 2 × 2 × 2 × 2 = 16.

### 🧪 Arithmetic Sandbox

Try out the various math operators in the editor to see how the numbers change!

<div class="integrated-sandbox" data-code="let a = 15;\nlet b = 4;\n\nconsole.log(&quot;Addition:&quot;, a + b);\nconsole.log(&quot;Subtraction:&quot;, a - b);\nconsole.log(&quot;Multiplication:&quot;, a * b);\nconsole.log(&quot;Division:&quot;, a / b);\nconsole.log(&quot;Modulus (Remainder):&quot;, a % b);\nconsole.log(&quot;Exponentiation:&quot;, a ** 2);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Math Basics</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## 2. Assignment Operators
Assignment operators are used whenever you need to **store or update** a value inside a variable.

### 2.1 Basic Assignment (`=`)
The absolute simplest one. It just takes whatever value is on the right side and drops it into the variable box on the left side.

*let age = 25;*  
*console.log(age); // 25*

### 2.2 Addition Assignment (`+=`)
Instead of completely wiping and overwriting a variable, `+=` lets you add a new amount to the **current value** of that variable, successfully updating it in a quick single step!

*let score = 50;*  
*score += 10; // This is purely a shortcut for typing: score = score + 10;*  
*console.log(score); // 60*

This behaves exactly like finding a 10 dollar bill and putting it into a wallet that already has 50 dollars. The new total simply updates to 60!

### 2.3 Subtraction, Multiplication, and Division Assignment (`-=`, `*=`, `/=`)
Following the exact same shortcut logic, you can easily subtract, multiply, or divide the current value of a variable without having to re-type its name!

**Subtraction Assignment:**  
*let balance = 100;*  
*balance -= 25; // Shortcut for: balance = balance - 25;*  
*console.log(balance); // 75*

**Multiplication Assignment:**  
*let price = 20;*  
*price \*= 3; // Shortcut for: price = price * 3;*  
*console.log(price); // 60*

**Division Assignment:**  
*let total = 100;*  
*total /= 4; // Shortcut for: total = total / 4;*  
*console.log(total); // 25*

**Simple idea:** Whenever you see a math operator squished right up against the equals sign, just imagine putting the variable's name onto the other side to do the math. 
`x += y` is logically identical to `x = x + y`.

### Assignment Operators at a Glance

| Operator | Name | Equivalent To |
| -------- | ------------------------- | ------------- |
| `=`      | Assignment                | `x = y`       |
| `+=`     | Addition Assignment       | `x = x + y`   |
| `-=`     | Subtraction Assignment    | `x = x - y`   |
| `*=`     | Multiplication Assignment | `x = x * y`   |
| `/=`     | Division Assignment       | `x = x / y`   |
| `%=`     | Modulus Assignment        | `x = x % y`   |
| `**=`    | Exponentiation Assignment | `x = x ** y`  |

### 🧪 Assignment Sandbox

Modify the starting score and run the shortcut operators!

<div class="integrated-sandbox" data-code="let score = 50;\nconsole.log(&quot;Starting score:&quot;, score);\n\nscore += 20; // adding 20\nconsole.log(&quot;After += 20:&quot;, score);\n\nscore /= 2; // dividing by 2\nconsole.log(&quot;After /= 2:&quot;, score);\n\nscore *= 3; // multiply by 3\nconsole.log(&quot;After *= 3:&quot;, score);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Shortcuts</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## 3. Comparison Operators

Comparison operators are used when we want to **compare two values**.

Instead of changing or storing a value, comparison operators ask a question such as:

* Is one value greater than another?
* Are two values equal?
* Is one value different from another?

The result of a comparison is always a **Boolean value**: *true* or *false*.

For example:

*let age = 25;*  
*console.log(age > 18); // true*

Here, JavaScript is asking:

> “Is 25 greater than 18?”

Since the answer is yes, JavaScript gives us *true*.

### 3.1 Equal to (`==`)

The `==` operator checks whether two values are equal **after allowing JavaScript to perform type conversion if necessary**.

*console.log(10 == 10); // true*  
*console.log(10 == 5);  // false*

It can also consider values of different types as equal:

*console.log(10 == "10"); // true*

Here, one value is a `Number` and the other is a `String`, but `==` converts them before making the comparison.

**Simple idea:** `==` → Are these two values equal?

> **Note:** In modern JavaScript, `===` is generally preferred because it avoids automatic type conversion.

### 3.2 Strictly Equal to (`===`)

The `===` operator checks both the **value and the data type**.

*console.log(10 === 10);   // true*  
*console.log(10 === "10"); // false*

In the second example:

*10 → Number*  
*"10" → String*

Although they contain similar-looking values, they have different data types. Therefore, `===` returns *false*.

**Simple idea:** `===` → Are the value AND the type the same?

This is the comparison operator you will commonly use in modern JavaScript.

### 3.3 Not Equal to (`!=`)

The `!=` operator checks whether two values are **not equal**.

*console.log(10 != 5);  // true*  
*console.log(10 != 10); // false*

It works similarly to `==` but checks for the opposite condition.

**Simple idea:** `!=` → Are these two values different?

### 3.4 Strictly Not Equal to (`!==`)

The `!==` operator checks whether the **value or the data type is different**.

*console.log(10 !== 5);   // true*  
*console.log(10 !== 10);  // false*  
*console.log(10 !== "10"); // true*

The last comparison returns *true* because:

*10 → Number*  
*"10" → String*

The values may look similar, but their data types are different.

**Simple idea:** `!==` → Is the value OR the type different?

### 3.5 Greater Than (`>`)

The `>` operator checks whether the value on the **left is greater than** the value on the right.

*console.log(10 > 5); // true*  
*console.log(3 > 8);  // false*

Think of it as asking:

> “Is the left value bigger than the right value?”

**Simple idea:**

*10 > 5 → true*  
*3 > 8  → false*

### 3.6 Less Than (`<`)

The `<` operator checks whether the value on the **left is smaller than** the value on the right.

*console.log(5 < 10); // true*  
*console.log(8 < 3);  // false*

Think of it as asking:

> “Is the left value smaller than the right value?”

**Simple idea:**

*5 < 10 → true*  
*8 < 3  → false*

### 3.7 Greater Than or Equal to (`>=`)

The `>=` operator checks whether the left value is **greater than or equal to** the right value.

*console.log(10 >= 5);  // true*  
*console.log(10 >= 10); // true*  
*console.log(3 >= 10);  // false*

Notice that *10 >= 10* is also *true* because the two values are equal.

**Simple idea:**

*>= → Is the left value greater than OR equal to the right value?*

### 3.8 Less Than or Equal to (`<=`)

The `<=` operator checks whether the left value is **less than or equal to** the right value.

*console.log(5 <= 10);  // true*  
*console.log(10 <= 10); // true*  
*console.log(15 <= 10); // false*

Again, equality is allowed, so *10 <= 10* returns *true*.

### Comparison Operators at a Glance

| Operator | Meaning                         | Example       | Result  |
| -------- | ------------------------------- | ------------- | ------- |
| `==`     | Equal after type conversion     | `10 == "10"`  | `true`  |
| `===`    | Equal value and type            | `10 === "10"` | `false` |
| `!=`     | Not equal after type conversion | `10 != "5"`   | `true`  |
| `!==`    | Different value or type         | `10 !== "10"` | `true`  |
| `>`      | Greater than                    | `10 > 5`      | `true`  |
| `<`      | Less than                       | `5 < 10`      | `true`  |
| `>=`     | Greater than or equal           | `10 >= 10`    | `true`  |
| `<=`     | Less than or equal              | `5 <= 10`     | `true`  |

### Simple Idea

Think of comparison operators as **questions we ask JavaScript**.

*10 > 5*  
*(Is 10 greater than 5?)*  
*→ true*

The important thing to remember is:

> **Comparison operators do not change the values. They compare values and give us a Boolean result: `true` or `false`.**

These results become especially useful when we start learning **conditions and decision-making**, such as `if`, `else`, and loops.

### 🧪 Comparison Sandbox

Try changing the age or modifying the comparisons to manually trigger True or False results!

<div class="integrated-sandbox" data-code="let myAge = 25;\nlet requiredAge = 18;\n\nconsole.log(&quot;Is my age greater than required?&quot;, myAge > requiredAge);\nconsole.log(&quot;Is my age exactly 25?&quot;, myAge === 25);\nconsole.log(&quot;Is my age less than 20?&quot;, myAge < 20);\n\nlet username = &quot;Admin&quot;;\nconsole.log(&quot;Is the user Admin?&quot;, username === &quot;Admin&quot;);\nconsole.log(&quot;Is the user a guest?&quot;, username === &quot;Guest&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Logic Checks</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## 4. Ternary Operator

The **Ternary Operator** (also known as the conditional operator) is incredibly popular because it acts like a super-fast, one-line shortcut for traditional `if/else` decision making!

It is famously called "ternary" because it is the only operator in JavaScript that takes exactly **three** pieces (operands) to work:

1. A **condition** to check (returns true or false)
2. A **question mark** (`?`) followed by the result if the condition is *true*.
3. A **colon** (`:`) followed by the result if the condition is *false*.

**The Syntax Formula:**  
*condition ? value_if_true : value_if_false;*

### 4.1 A Practical Example

Let's imagine you are writing code to check if a user is old enough to enter a website:

*let age = 20;*  
*let entryMessage = (age >= 18) ? "Welcome in!" : "You are too young.";*  
*console.log(entryMessage); // "Welcome in!"*

**How to read it like plain English:**  
* "Is age greater than or equal to 18?"
* `?` (If yes) → Give them *"Welcome in!"*
* `:` (Otherwise) → Give them *"You are too young."*

**Simple idea:** The ternary operator simply asks a true/false question and immediately spits out one of two answers depending on the result. It perfectly replaces bulky 5-line `if / else` statement blocks!

### 🧪 Ternary logic Sandbox

Try tweaking the variables to change the outcome of the one-line decision maker:

<div class="integrated-sandbox" data-code="let userScore = 75;\nlet passingGrade = 60;\n\n// Decision made in a single line!\nlet examResult = (userScore >= passingGrade) ? &quot;Passed the exam 🎓&quot; : &quot;Needs to retake 📚&quot;;\n\nconsole.log(&quot;Student Status:&quot;, examResult);\n\n// Another quick Example\nlet themePreference = &quot;Dark&quot;;\nlet backgroundColor = (themePreference === &quot;Dark&quot;) ? &quot;#000000&quot; : &quot;#FFFFFF&quot;;\nconsole.log(&quot;Setting page background to:&quot;, backgroundColor);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Quick Decisions</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## 5. Unary Operators

Most operators we've looked at (like `+` or `>`) require **two** values to work, one on the left and one on the right. 

A **Unary Operator** is unique because it only takes exactly **one** single value (or operand) to do its job!

### 5.1 Increment (`++`) and Decrement (`--`)
These are incredibly popular shortcuts to quickly add or subtract exactly `1` from a variable's value. But notice, there are **two different ways** to use them depending on whether you place the symbol before or after the variable!

#### Post-Increment (`score++`) and Post-Decrement (`score--`)
When the symbol comes **after** the variable, JavaScript will use the completely original unchanged value *first* to run the current line of code, and only quietly add/subtract 1 *afterward* in the background.

```javascript
let score = 10; 
console.log(score++); // Prints 10 first, THEN adds 1 secretly!
console.log(score);   // Suddenly, it logs 11 on the next line

let lives = 3;
console.log(lives--); // Prints 3 first, THEN subtracts 1
console.log(lives);   // Now it logs 2
```
<br />

#### Pre-Increment (`++score`) and Pre-Decrement (`--score`)
On the flipside, when the symbol comes **before** the variable, JavaScript will immediately add/subtract 1 *before* doing anything else, and perfectly return the updated value on the very same line!

```javascript
let points = 10; 
console.log(++points); // Adds 1 right away and prints 11!
console.log(points);   // Still 11

let health = 100;
console.log(--health); // Subtracts 1 directly and prints 99!
console.log(health);   // Still 99
```
<br />

> **Simple idea:** `x++` (Post) says "Use me now, upgrade me later." but `++x` (Pre) says "Upgrade me now, then use me!" 

### 5.2 Logical NOT (`!`)
We use the exclamation mark to physically flip a Boolean condition to its total opposite. If something is true, `!` makes it false!

*let isRaining = true;*  
*console.log(!isRaining); // false*

**Simple idea:** Always read the `!` symbol as the word **"NOT"**. So `!true` reads smoothly as "Not true" (which gives you *false*).

### 5.3 Typeof (`typeof`)
Have you ever stared at a variable and wondered what datatype is secretly hiding inside it? The `typeof` operator tells you precisely what type of data you are looking at!

*let age = 25;*  
*let name = "Alex";*  
*console.log(typeof age); // "number"*  
*console.log(typeof name); // "string"*

### 5.4 Unary Plus (`+`) and Negation (`-`)
If you put a plus or minus sign directly against a single string value, it will instantly try to convert that string right into a math number. 
* **Unary Plus (`+`)** turns a string into a number.
* **Unary Negation (`-`)** turns it into a number and immediately flips it to negative.

*let textPrice = "99";*  
*console.log(+textPrice); // The string "99" turns into the number 99!*  
*console.log(-textPrice); // The string "99" turns into the number -99!*

---

### 🧪 Unary Sandbox

Experiment with these fast one-value operators!

<div class="integrated-sandbox" data-code="let postScore = 10;\nconsole.log(&quot;Post-Increment:&quot;, postScore++);\nconsole.log(&quot;After Post:&quot;, postScore);\n\nlet preScore = 10;\nconsole.log(&quot;Pre-Increment:&quot;, ++preScore);\nconsole.log(&quot;After Pre:&quot;, preScore);\n\nlet isLoading = false;\nconsole.log(&quot;Flipped boolean (!):&quot;, !isLoading);\n\nlet weirdNumber = &quot;50&quot;;\nconsole.log(&quot;Converting string directly (+):&quot;, +weirdNumber);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: One-Value Actions</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
