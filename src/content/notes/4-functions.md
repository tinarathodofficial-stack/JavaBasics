---
title: "4. Functions & Return"
description: "Declaration types, parameters, return statements."
order: 4
category: "Functions & Modules"
---

Functions bundle blocks of calculations together. They receive parameters, process statements, and output a specific result using the `return` keyword.

In modern JavaScript, there are two primary methods to declare functions:
*   **Traditional Declarations:** Uses the `function` keyword.
*   **Arrow Functions:** Shorter syntax: `const name = (args) => { ... }`.

### Functional Return Sandbox

Try defining standard arithmetic functions and invoking them in the editor:

<div class="integrated-sandbox" data-code="function convertFahrenheitToCelsius(fahrenheit) {\n    return (fahrenheit - 32) * 5 / 9;\n}\n\nconst todayTempC = convertFahrenheitToCelsius(77);\nconsole.log(&quot;Temperature in Celsius is:&quot;, todayTempC + &quot;°C&quot;);\n\n// Arrow function variant\nconst squareValue = (x) => x * x;\nconsole.log(&quot;Square of 9 is:&quot;, squareValue(9));">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Reusable Functions</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
