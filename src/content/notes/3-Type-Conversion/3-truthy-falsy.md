---
title: "2. Truthy & Falsy Values"
description: "Understanding which values JavaScript inherently treats as true or false."
order: 2
category: "Type Conversion"
---

# Truthy & Falsy Values

In JavaScript, literally every single piece of data has an inherent "boolean" personality when it is placed inside a logic check (like an `if` statement). This means absolutely everything is naturally treated as either `true` or `false` even if it is not technically a boolean datatype!

---

## 1. The Falsy Values (The "False" Personalities)

There are exactly **6 items** in the entire JavaScript language that evaluate to `false` (known as "falsy" values). If you memorize these, everything else is natively truthy!

1. `false` (The actual boolean keyword)
2. `0` (The math number zero)
3. `""` or `''` (An empty string with absolutely no text inside)
4. `null` (An intentionally empty value)
5. `undefined` (A variable that hasn't been given a value yet)
6. `NaN` (A broken math outcome, meaning "Not a Number")

### 📝 Falsy Examples in Action

If you drop any of those 6 items into an `if` statement, JavaScript will automatically reject them and skip the code branch!

*let strikes = 0;*  
*if (strikes) {*  
&nbsp;&nbsp;*console.log("This will never print because 0 is falsy!");*  
*}*

*let username = "";*  
*if (username) {*  
&nbsp;&nbsp;*console.log("This will never print because an empty string is falsy!");*  
*}*

---

## 2. Truthy Values (The "True" Personalities)

If a value is **not** on that exact falsy list above, JavaScript automatically considers it **truthy**!

### 📝 Common Truthy Examples
* `"Hello"` (A string with text)
* `42` (Any positive or negative non-zero math number)

### ⚠️ Weird Truthy Traps!
Since *only* the exact 6 items above are falsy, some really weird things evaluate to `true`. Be careful!
* `"false"` (Because it is a string with text in it! It is not the boolean keyword `false`)
* `"0"` (Because it is a string containing the text "0", not the math number `0`)
* `[]` (Even an entirely empty Array!)
* `{}` (Even an entirely empty Object!)

### 📝 Truthy Examples in Action

*let userBalance = -50;*  
*if (userBalance) {*  
&nbsp;&nbsp;*console.log("This prints! Even negative numbers are Truthy!");*  
*}*

*let trickyString = "0";*  
*if (trickyString) {*  
&nbsp;&nbsp;*console.log("This prints! Text containing a zero is completely Truthy!");*  
*}*

> **Simple idea:** Memorize the 6 falsy items (like `0`, `""`, and `undefined`). If someone asks if anything else in the entire universe is true or false, the answer is always **True**!
