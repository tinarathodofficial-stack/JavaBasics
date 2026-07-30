# ⚡ JavaScript Basics — Interactive Learning Platform

Welcome to **JavaScript Basics**, a modern, interactive, and beginner-friendly web documentation platform built to teach the core fundamentals of JavaScript. 

This platform combines rich visual explanation models (such as execution architecture diagrams) with a **Live Workshop Playground** embedded right next to each lesson chapter, allowing developers to execute JavaScript snippets instantly in their web browser.

---

## 🎨 Core Platform Features

- 📖 **Structured Markdown Lessons**: Well-organized note chapters utilizing Astro's Content Collections schema.
- 💻 **Live Workshop Playgrounds**: Interactive browser sandboxes on notes pages that evaluate Javascript code in real-time and pipe `console.log()` and `console.error` outputs directly onto the UI.
- 🧱 **Astro Content Architecture**: Powered by Astro with high-performance metrics, clean semantic SEO layouts, and local typography stylesheets.
- 🧭 **Targeted Navigation**: The sidebar navigation dynamically filters and lists the **Getting Started** section to deliver a focused, step-by-step onboarding experience.

---

## 🚀 Directory Structure

The repository workspace matches the following structure:

```text
├── public/                # Static assets, icons, and logo assets
├── src/
│   ├── assets/            # Fonts and illustration images (flowcharts, metaphors)
│   │   └── images/        # Conceptual visual aid diagrams
│   ├── components/        # Reusable UI component modules
│   ├── content/           # Astro content collection directory
│   │   └── notes/         # Chapter markdown files (*.md)
│   ├── layouts/           # Page rendering templates
│   │   └── Layout.astro   # Main wrapper structure featuring the sandbox compiler logic
│   └── pages/             # Route endpoints
│       ├── index.astro    # Redirect script pointing to the first chapter route
│       └── [slug].astro   # Dynamic route rendering notes using the layout template
├── astro.config.mjs       # Astro framework configuration and integrations
├── package.json           # Scripts and core dependencies
└── tsconfig.json          # TypeScript workspace configuration
```

---

## 📚 Curriculum & Note Collections

### 🟢 Active (Getting Started)
These chapters are visible on the sidebar for onboarding:
1. **Intro to JavaScript** (`1-intro.md`): Understanding the role of JS in the Web Stack (HTML/CSS/JS metaphor) and what it does.
2. **JavaScript Execution Environments** (`1-howItworks.md`): Exploring the browser JavaScript engine vs. Node.js runtime environment.
3. **How JavaScript Works** (`1-howjsrun.md`): Explores compilation, execution contexts, and call stacks.
4. **Console Basics** (`1-consolebasics.md`): Leveraging the developer console controls and output methods.

### 🟡 Core Syntax & Advanced (Hidden from Sidebar)
These note source files are stored in `src/content/notes/` but are temporarily excluded from the sidebar navigation:
- **Core Syntax**: Variables & Scope (`2-variables.md`), Control Flow & Loops (`3-control-flow.md`)
- **Functions & Modules**: Functions & Return (`4-functions.md`)
- **Functions & Lists**: Arrays & Iteration (`5-arrays.md`)

---

## 🎮 Playground Sandbox Architecture

The custom browser compiler is implemented natively within `src/layouts/Layout.astro`. It hooks into the client runtime by:
1. Capturing and preserving global references to Web APIs (`console.log`, `console.error`).
2. Intercepting argument streams to serialize objects or format outputs into structured HTML strings.
3. Executing user-edited textarea content through a dynamic `new Function()` wrapper.
4. Catching runtime syntax exceptions and gracefully rendering visual diagnostic feedback (e.g. `❌ Execution Error: ...`).

---

## 🔌 Commands & Local Development

Run the commands below from the project root directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs framework dependencies |
| `npm run dev` | Spins up the local development hot-reload server at `http://localhost:4321` |
| `npm run build` | Builds the production static site bundle into `./dist/` |
| `npm run preview` | Runs a local server to preview the built production bundle |
| `npm run astro ...` | Executes Astro CLI helper commands |
