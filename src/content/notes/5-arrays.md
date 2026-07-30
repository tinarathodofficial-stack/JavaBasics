---
title: "5. Arrays & Iteration"
description: "Arrays structures and built-in higher-order map and filter functions."
order: 5
category: "Functions & Lists"
---

Arrays are list values. Instead of utilizing legacy index loops (e.g. `for (let i=0;...)`), modern JavaScript includes powerful prototype methods like `map()` and `filter()` to process array transformations.

*   **map:** Loops over every item, executes a transform expression, and yields a new array of matching length.
*   **filter:** Loops over every element, tests if the expression returns true or false, and filters items returning true into a new array.

### Array Processor Sandbox

Load code filters to inspect how product arrays map or isolate variables in execution:

<div class="integrated-sandbox" data-code="const productCatalog = [\n    { name: &quot;Wireless Mouse&quot;, price: 25 },\n    { name: &quot;Mechanical Keyboard&quot;, price: 85 },\n    { name: &quot;4K Monitor&quot;, price: 320 },\n    { name: &quot;USB-C Hub&quot;, price: 15 }\n];\n\n// 1. Filter expensive items (>50)\nconst premiumProducts = productCatalog.filter(item => item.price > 50);\nconsole.log(&quot;Premium Items:&quot;, premiumProducts);\n\n// 2. Map prices to output discount prices\nconst discountedCatalog = productCatalog.map(item => {\n    return {\n        name: item.name,\n        price: item.price * 0.9 // 10% off\n    };\n});\nconsole.log(&quot;Discounted Catalog:&quot;, discountedCatalog);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Array Operations</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
