---
title: "2. Datatypes"
description: "Understanding string, number, boolean, object, and array structures in memory."
order: 2
category: "Variables & Data Types"
---

# Data Types in JavaScript

> **Definition:** A **datatype** is an attribute associated with a piece of data that tells a computer system how to interpret its value.

In JavaScript, every value is physically tied to a **data type**. Having a strong grasp on data types is incredibly important because they decide:
* **Memory Storage:** How your computer physically stores and points to your values.
* **Operations:** What mathematical or logical actions you can perform on them safely.
* **Behaviors:** How JavaScript acts during comparisons and data conversions.

JavaScript categorizes its data types into two main overarching groups:
1. **Primitive Types** (Simple, foundational data)
2. **Non-Primitive Types** (Complex, referenced data)

---

## 1. Primitive Data Types

Primitive types are the most basic, built-in data formats in JavaScript. They hold just a single unified value and are strictly **immutable**. This means you cannot directly alter the internal shape of a primitive value in memory; instead, you can only swap it completely with a brand-new value.

Conceptually, primitive types are small and simple, so they are stored directly in **stack memory** for incredibly fast access. JavaScript gives us seven primitive data types:

### 1.1 String
Whenever you want to define text, words, or complete sentences in programming (for example: "hello world", "hi", or "how are you"), you use the **string** data type. You create a string simply by wrapping your characters inside single quotes ('...'), double quotes ("..."), or backticks (&#96;...&#96;).
*Example: let message = "Hello World";*

### 1.2 Number
If you want to define numerical values like 0.12, 2, or 45, you use the **number** data type. Unlike many other programming languages that treat whole numbers (integers) and floating-point decimal numbers as two entirely different things, JavaScript keeps it simple and treats all of them as just a Number.
*Example: let age = 25; or let price = 99.99;*

### 1.3 Boolean
A **Boolean** represents a yes/no or true/false situation. It can have only two possible values: true or false. Booleans are mainly used when a program needs to make a decision. *For example: let isActive = true;* Here, isActive tells us that the user or feature is currently active. You will commonly see Booleans used in conditions:

*if (isActive) {*  
*console.log("User is active");*  
*}*

**Simple idea:** Boolean → true or false → used for decisions

### 1.4 Undefined
**undefined** means that a variable exists, but it does not currently have a value assigned to it. *For example: let score;* Here, we created the variable score, but we did not give it a value. Therefore: *console.log(score); // undefined*

You can think of it as:
> **“The value has not been provided yet.”**

**Simple idea:** Variable created → No value assigned → undefined

### 1.5 Null
**null** represents an intentional absence of a value. The important difference is that with undefined, a value has not been provided. With null, **we deliberately tell JavaScript that there is currently no value**. *For example: let selectedUser = null;*

This means:
> “There is currently no selected user.”

Later, we can assign an actual value: *selectedUser = "Rahul";*

**Simple idea:**
* undefined → value has not been provided
* null → no value is intentionally assigned

### 1.6 BigInt
**BigInt** is used when we need to work with very large whole numbers that are beyond the safe range of JavaScript's regular Number type. A BigInt is created by adding **n** at the end of the number: *let bigValue = 12345678901234567890n;*

Here, the n tells JavaScript:
> **“Treat this as a BigInt.”**

BigInt is mainly useful when applications need to work with very large integer values.

**Simple idea:**
* Number → normal numbers
* BigInt → very large whole numbers

### 1.7 Symbol
A **Symbol** creates a unique value that can be used as an identifier or as a unique key in an object.

*For example:*
*let id1 = Symbol("userID");*  
*let id2 = Symbol("userID");*

Even though both Symbols have the same description "userID", they are still **different and unique values**: *console.log(id1 === id2); // false* Think of it like giving two people the same label but giving each person a different identity:
* Symbol("userID") → unique Symbol #1
* Symbol("userID") → unique Symbol #2

The text "userID" is only a **description** to help us understand what the Symbol represents. It does not make the two Symbols the same. Symbols are mainly useful when we need a **unique key for an object property**, especially when we want to avoid accidentally using the same property name as another part of the program.

*For example:*
*const id = Symbol("id");*  
*const user = {*  
*name: "Rahul",*  
*[id]: 101*  
*};*

Here, id is a Symbol used as a unique property key.

**Simple idea:** Symbol → Creates a unique value → Can be used as an identifier/key

### 🧪 Primitive Types Sandbox

Run this code sandbox to observe the different primitive types being logged into the console string memory:

<div class="integrated-sandbox" data-code="let stringType = &quot;Astro&quot;;\nlet numberType = 42;\nlet booleanType = true;\nlet undefinedType;\nlet nullType = null;\n\nconsole.log(&quot;String Data:&quot;, stringType);\nconsole.log(&quot;Number Data:&quot;, numberType);\nconsole.log(&quot;Boolean Data:&quot;, booleanType);\nconsole.log(&quot;Undefined Data:&quot;, undefinedType);\nconsole.log(&quot;Null Data:&quot;, nullType);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Primitive Data</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

---

## 2. Non-Primitive Data Types (Reference Types)

Non-primitive data types (also frequently called **reference types**) handle complex structures and large collections of data points. Instead of storing massive amounts of data directly within a tight variable box, JavaScript stores a *reference* (a pointer map to a location in your computer's larger heap memory) inside the variable.

Key structural differences:
* **Mutable:** You can change the internal data points without having to throw away and recreate the whole structure!
* **Stored by Reference:** When you assign a non-primitive to another variable, you only copy the *reference address*, meaning both variables hook up to the very same single data object.

### 2.1 Objects
An object is a bundled collection of **key-value pairs**. It's fundamentally used to model properties of real-world entities (like a user account, blog post, or shopping cart). 

Keys act like named labels, and values act like the raw data attached right onto the label:

```javascript
let user = {
    name: "Alex",     // Key is 'name' | Value is "Alex"
    age: 25,          // Key is 'age'  | Value is 25
    isActive: true    // Key is 'isActive' | Value is true
};
```

### 2.2 Arrays
An array is a remarkably common format used strictly to keep a list of multiple items contained in a heavily specific **ordered sequence**. 
* They use numerical **index-based access** (always starting checking from `0`).
* You are freely allowed to store a completely mixed up list of differing data types inside a single array.

```javascript
let numbers = [10, 20, 30]; // 10 is at index 0, 20 at index 1
console.log(numbers[0]); // This outputs 10!
```
> **Interesting Fact:** If you run `typeof numbers`, JavaScript surprisingly returns `"object"`. This happens because under the hood, arrays are just specially adapted, number-indexed objects in JavaScript architecture!

### 🧪 Non-Primitive Reference Sandbox

Try out this sandbox! Check how modifying one variable can unexpectedly impact another due to memory referencing behavior:

<div class="integrated-sandbox" data-code="let user1 = { name: &quot;Alex&quot;, age: 25 };\nlet user2 = user1; // user1 and user2 point to the very same memory!\n\n// We change user2's age...\nuser2.age = 30;\n\n// Look what surprisingly happens to user1 when we run it:\nconsole.log(&quot;User 1 Age:&quot;, user1.age);\nconsole.log(&quot;User 2 Age:&quot;, user2.age);\n\n// Exploring an Array sequence as well\nlet colors = [&quot;Red&quot;, &quot;Green&quot;];\ncolors.push(&quot;Blue&quot;); // Modifying mutably\nconsole.log(&quot;Array Sequence:&quot;, colors);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Reference Memory</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
