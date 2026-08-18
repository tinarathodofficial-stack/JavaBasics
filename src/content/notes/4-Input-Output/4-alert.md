---
title: "1. alert()"
description: "Using alert to pop up a message to the user."
order: 1
category: "Input & Output"
---

# alert()

The `alert()` function is an extremely simple built-in command that creates a graphical pop-up window right on the user's screen. 

*alert("Warning: Your checkout failed!");*

### 1. It belongs to the Window, not the Console

Unlike `console.log()` which silently prints text into the developer tools (hidden from normal users), `alert()` is actually a built-in method belonging to the global browser interface. Its true, fully-technical name is actually `window.alert()`! 

Because it natively belongs to the `window` object, it creates a literal graphical pop-up window directly in the middle of the screen that visually forces the user to interact with it.


![Browser Window object alerts()](../../../assets/images/alerts.png)


### 2. The Big Problem: It Freezes Everything

Historically, `alert()` was heavily used to show important warnings or errors to users (like "Please enter a valid email"). 

However, today it is highly discouraged in professional websites because it is a **blocking method**. When an alert pops up:
* It completely freezes all JavaScript execution on the entire page.
* The user cannot scroll, type, or interact with anything else on the webpage.
* Everything is entirely stuck until they finally click the "OK" button!

### 3. What do Professionals Use Instead?

Because `alert()` is incredibly disruptive and completely breaks the flow of a website, modern developers now handle warnings differently:

* **For Developers (Debugging):** We use `console.warn()` or `console.error()`. This strictly drops the warning quietly in the developer tools without freezing the user's screen.
* **For regular Users (UX):** We build custom, beautiful UI elements (often called "Toasts", "Banners", or "Modals"). These are those sleek, non-blocking error boxes you see slide in at the corner of modern apps!

> **Simple idea:** Today, `alert()` is mostly just used by beginners getting started with JavaScript as a super fast way to test if code is working without needing to even open up the developer console!

---

### 🧪 Alert Sandbox

Trigger an alert natively right inside the browser window! Notice how you absolutely cannot click anything else on the underlying page while it's open!

<div class="integrated-sandbox" data-code="alert(&quot;Hello from the sandbox! Notice how you must strictly click OK to continue!&quot;);\nconsole.log(&quot;This log only prints AFTER you click OK!&quot;);">
    <div class="sandbox-header">
        <div class="sandbox-title">Snippet Sandbox: Popping an Alert</div>
    </div>
    <textarea class="sandbox-editor" spellcheck="false"></textarea>
    <div class="sandbox-controls">
        <button class="btn btn-secondary btn-reset">Reset</button>
        <button class="btn btn-primary btn-run">Run Code</button>
    </div>
    <div class="sandbox-output">Console empty...</div>
</div>
