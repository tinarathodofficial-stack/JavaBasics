---
title: "2. switch"
description: "Using switch statements for multiple conditions."
order: 2
category: "Control Flow"
---

# Switch Statement

The **`switch` statement** is another way to make decisions in JavaScript.
It is useful when we want to compare **one value against multiple possible values**.
Instead of writing many `if...else if` conditions, we can use `switch` to make the code easier to read.

### The 4 Core Keywords

Every `switch` statement is built using these four specific keywords:
- **`switch`**: The starting point. It holds the main variable you actually want to check.
- **`case`**: A specific option we are looking for. It asks, *"Does the variable match this exactly?"*
- **`break`**: A stop sign! It tells JavaScript: *"We found our match, stop checking the rest!"*
- **`default`**: The backup plan. If absolutely none of the cases match, this code will run completely instead.

### Real-World Example

Imagine a food delivery application where the order can have different statuses:

```text
Order Status
     │
     ├── "pending"   → Order is being prepared
     ├── "shipped"   → Order is on the way
     ├── "delivered" → Order has been delivered
     └── "cancelled" → Order was cancelled
```

### Translating to Code

Here is how we logically design that exact delivery system using the clean structural syntax of a `switch` statement!

```javascript
let orderStatus = "shipped"; // Try changing this value!

switch (orderStatus) {
    case "pending":
        console.log("Your order is being prepared.");
        break; // Stops checking the other cases!
        
    case "shipped":
        console.log("Your order is on the way!");
        break;
        
    case "delivered":
        console.log("Your order has been safely delivered.");
        break;
        
    case "cancelled":
        console.log("Unfortunately, your order was cancelled.");
        break;
        
    default:
        // This naturally triggers if NONE of the cases matched!
        console.log("Invalid ordering status.");
}
```

### The Magic of the `break` Keyword

In a `switch` block, JavaScript intelligently hops straight down to the specifically matching `case` and executes its code. But there is a massive catch: **without a `break` keyword, it will "fall through" and accidentally run every single case below it as well!**

The `break` keyword acts as an aggressive stop sign. It definitively tells JavaScript: *"We found our match and ran our targeted code! Stop immediately and completely break out of this entire switch block."*

> **Simple idea:** The `case` perfectly matches the exact value, the `break` sharply stops the execution, and the `default` acts as the safety backup plan (identical to how an `else` backup behaves for `if` statements).

### 🧪 Sandbox: switch Statement

Try changing `status` to `"pending"`, `"cancelled"`, or even a random string like `"lost"` to see how the `switch` engine captures and evaluates it!

<div class="integrated-sandbox" data-code="let status = &quot;shipped&quot;;\n\nswitch (status) {\n    case &quot;pending&quot;:\n        console.log(&quot;Food is cooking!&quot;);\n        break;\n    case &quot;shipped&quot;:\n        console.log(&quot;Driver is on the way!&quot;);\n        break;\n    case &quot;delivered&quot;:\n        console.log(&quot;Enjoy your meal!&quot;);\n        break;\n    default:\n        console.log(&quot;Where did the food go?&quot;);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Order Delivery Switch</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>