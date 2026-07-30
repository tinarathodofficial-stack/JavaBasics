---
title: "3. Control Flow & Loops"
description: "Conditional pathways and iteration loops."
order: 3
category: "Core Syntax"
---

Control flow is the order in which code lines execute. You control path branching using conditional statements (like `if/else`) and loop structures (like `for` loops and `while` loops) to cycle through tasks.

<div class="concept-callout fact-box">
    <strong>Quick Tip:</strong> Use conditional loops when iterating a set number of cycles (such as array ranges), and <code>while</code> loops when iterating until a certain condition yields true.
</div>

### Conditionals Sandbox

Adjust the parameters (like `currentBalance` and `itemCost`) in the editor below and click Run to test if conditional execution paths change:

<div class="integrated-sandbox" data-code="const currentBalance = 150;\nconst itemCost = 80;\n\nif (currentBalance >= itemCost) {\n    console.log(&quot;Transaction Approved!&quot;);\n    console.log(&quot;Remaining Balance:&quot;, currentBalance - itemCost);\n} else {\n    console.log(&quot;Insufficient balance to make this purchase.&quot;);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Conditionals</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

### Looping Sandbox

Loops let you run custom blocks repeatedly. This example runs a `for` loop to output values:

<div class="integrated-sandbox" data-code="console.log(&quot;Building iteration values:&quot;);\n\nfor (let i = 1; i <= 5; i++) {\n    console.log(&quot;Step number:&quot;, i);\n}\n\nconsole.log(&quot;Loop execution complete!&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: For Cycles</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
