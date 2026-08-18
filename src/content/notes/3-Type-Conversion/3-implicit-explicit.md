---
title: "1. Implicit vs Explicit Conversion"
description: "Understanding how JavaScript automatically and manually converts data types."
order: 1
category: "Type Conversion"
---

# JavaScript Type Conversion

In JavaScript, **type conversion** simply means changing a value from one data type into a completely different one (like turning the text string `"5"` into the math number `5`). 

This happens in exactly two ways:
* **Implicit Conversion (Background Conversion):** Where JavaScript automatically changes the types behind the scenes to try and "help" make your operation work.
* **Explicit Conversion (Manual Conversion):** Where you, the programmer, intentionally force a type change yourself.

## 1. Implicit Conversion (Automatic)

Sometimes, if you mix string text and numbers together, JavaScript won't crash. Instead, it quietly converts the types so they match.

### A. Automatic String Conversion (The `+` Operator)
If you try to add (`+`) a string and a number together, JavaScript will automatically turn the number into text and glue them together!

*let mathResult = "The answer is " + 42;*  
*console.log(mathResult); // Output: "The answer is 42"*

*let booleanResult = true + " story";*  
*console.log(booleanResult); // Output: "true story"*

### B. Automatic Number Conversion (Math Operators except `+`)
If you try to subtract (`-`), multiply (`*`), or divide (`/`) using string text, JavaScript will try its hardest to secretly convert the text into math numbers!

*let sub = "10" - 2; // Output: 8 (Turned "10" into a number!)*  
*let mult = "5" * "4"; // Output: 20*  
*let div = "20" / "five"; // Output: NaN (Failed because "five" is a word, not a math number!)*

### C. Loose Equality (`==`)
When you use a loose equals sign (`==`), JavaScript will forcefully change the types of both sides to match before checking if they are equal. This causes extremely confusing bugs!

*console.log(5 == "5"); // true (Because it forces "5" to become a math number)*  
*console.log(1 == true); // true (Because it converts true into the number 1)*

> **Simple idea:** Always use `===` strict equality instead of `==`, because strict equality checks the exact values *without* doing any automatic background conversions!

---

## 2. Explicit Conversion (Manual)

If you do not want to rely on JavaScript guessing what to do in the background, you can forcefully convert data yourself using built-in helper functions! 

### A. Converting to a String (Text)
If you need to ensure a number or boolean becomes text, you can wrap it in the `String()` function.

*let age = 25;*  
*let textAge = String(age); // Completely forces the number into the string "25"*  
*console.log(typeof textAge); // "string"*

### B. Converting to a Number
If the user types their age into a webpage form, it usually saves that data as a text string (like `"18"`). You can manually turn it back into a real math number using the `Number()` function.

*let ageInput = "18";*  
*let realAge = Number(ageInput); // Forces the string into the math number 18*  
*console.log(realAge + 5); // 23*

**Nuance:** If you try to force non-math letters into a number, JavaScript won't crash, but it will result in `NaN` (Not a Number)!  
*console.log(Number("Apple")); // NaN*

### C. Converting to a Boolean
You can also force any value to reveal its hidden Truthy or Falsy trait by explicitly wrapping it in the `Boolean()` function.

*console.log(Boolean(0)); // false (Because 0 is inherently falsy!)*  
*console.log(Boolean("Hello")); // true (Because text strings are inherently truthy!)*

> **Simple idea:** To convert properly, just capitalize the name of the datatype you desire (like `String()`, `Number()`, or `Boolean()`) and drop the value right inside the parentheses!

---

## 3. Type Conversion Compatibility Table

Here is a quick lookup sheet showing which datatype conversions JavaScript will do automatically for you in the background (Implicit), and which ones you must forcefully do yourself (Explicit).

| Conversion Goal | Happens Automatically? | Doing it Manually (Explicit) | How it happens Automatically (Implicit) |
| --- | --- | --- | --- |
| **String to Number** | ✅ Yes | `Number("10")` | Using Math: `"10" - 5` |
| **Number to String** | ✅ Yes | `String(42)` | Adding Text: `42 + " items"` |
| **Boolean to Number** | ✅ Yes | `Number(true)` | Using Math: `true * 5` |
| **Number to Boolean** | ✅ Yes | `Boolean(1)` | Logical checks: `if (1) { ... }` |
| **String to Array** | ❌ No | `Array.from("text")` | *n/a* |
| **Object to String** | ❌ No | `JSON.stringify(obj)` | *n/a* |
