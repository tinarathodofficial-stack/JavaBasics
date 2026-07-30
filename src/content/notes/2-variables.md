---
title: "2. Variables & Scope"
description: "Differences between var, let, const and block scoping rules."
order: 2
category: "Core Syntax"
---

Variables serve as container values. JavaScript exposes three keywords to define variables: `var`, `let`, and `const`.

*   **var:** The legacy keyword. Variables declared with `var` have functional or global scope and suffer from variable hoisting.
*   **let:** Block-scoped variable declaration. The variable can be reassigned freely.
*   **const:** Block-scoped read-only constants. They cannot be reassigned once defined.

<div class="concept-callout insight-box">
    <strong>Developer Insight:</strong> Avoid using <code>var</code>. Modern development practices dictate using <code>const</code> by default for most variables, and falling back to <code>let</code> only when you expect values to mutate.
</div>

### Reassigning Values Playground

Run the code below to see the difference between reassigning a variable declared with `let` versus a variable declared with `const`. Notice how the output console captures errors:

<div class="integrated-sandbox" data-code="let score = 100;\nscore = 120; // reassignment allowed\nconsole.log(&quot;Score is:&quot;, score);\n\nconst username = &quot;DevUser&quot;;\ntry {\n    username = &quot;Admin&quot;; // will fail!\n} catch(err) {\n    console.error(&quot;Failed const reassignment:&quot;, err.message);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Constants Mutation</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>

<h3>Block Scope vs Function Scope</h3>

Variables declared inside curly braces using `let` or `const` are scoped exclusively within those braces. However, variables declared with `var` leak outside block statements:

<div class="integrated-sandbox" data-code="if (true) {\n    var globalLeak = &quot;I can be accessed outside if statement!&quot;;\n    let localSecret = &quot;I am locked inside the block.&quot;;\n}\n\nconsole.log(globalLeak); // Prints correctly\n\ntry {\n    console.log(localSecret); // Fails!\n} catch(err) {\n    console.error(&quot;Error accessing block variable:&quot;, err.message);\n}">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Scope Isolation</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
