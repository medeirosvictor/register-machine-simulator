# Register Machine Simulator

A web-based simulator for an **Unlimited Register Machine (URM)**, built as an undergraduate project with React and Material UI.

> **Note:** This was an undergrad project — the code reflects my skills at the time and is preserved as-is for honesty. See [Housekeeping Notes](#housekeeping-notes) at the bottom for known rough edges.

**[Live Demo →](https://medeirosvictor.github.io/register-machine-simulator/)**

---

## What is a Register Machine?

A **Register Machine** (specifically a URM — Unlimited Register Machine) is a theoretical model of computation introduced by Shepherdson and Sturgis. It's one of several equivalent formalisms that capture the idea of "what is computable" — sitting alongside Turing Machines, Lambda Calculus, and recursive functions.

The machine operates on an **unlimited** number of **registers** (`r0`, `r1`, `r2`, …), each holding a natural number. A program is a finite sequence of **instructions** that manipulate these registers.

### Why does it matter?

URM models are used in **computability theory** to prove that certain functions are computable (or not). They are equivalent in power to Turing Machines — anything one can compute, the other can too. Their register-based design makes them closer in spirit to real CPUs than a tape-based Turing Machine, which can make certain proofs and constructions more intuitive.

---

## Instruction Set

This simulator supports the following instructions:

| Instruction          | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `init rN V`          | Initialize register `rN` with value `V`                           |
| `inc rN`             | Increment register `rN` by 1                                      |
| `dec rN`             | Decrement register `rN` by 1                                      |
| `set0 rN`            | Zero out register `rN`                                             |
| `set rN rM`          | Copy the value of register `rM` into `rN`                         |
| `add rN rM`          | Add the value of `rM` to `rN` (result stored in `rN`)             |
| `if is0 rN`          | If `rN == 0`, execute the following indented block                 |
| `if notis0 rN`       | If `rN != 0`, execute the following indented block                 |
| `else`               | Else branch for the preceding `if`                                 |
| `goto L`             | Jump to line number `L` (0-indexed)                                |

### Example: Multiplication (30 × 55)

```
init r0 30
init r1 55
if is0 r1
    goto 9
if notis0 r1
    add r2 r0
    dec r1
    goto 3
else
    set r12 r3
```

**How it works:** Register `r0` holds one operand, `r1` the other. The loop repeatedly adds `r0` into `r2` while decrementing `r1`. When `r1` reaches 0 the loop exits and `r2` holds the product (1650).

This is the classic "multiplication by repeated addition" — a standard URM exercise that demonstrates loops (`goto`) and conditionals (`if is0` / `if notis0`).

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to use the simulator.

### Build for production

```bash
pnpm build
pnpm preview   # preview the production build locally
```

---

## Tech Stack

- **React** (class-free, hooks-based)
- **Material UI v4** — component library & theming
- **Vite** — dev server & bundler

---

## Project Structure

```
src/
├── App.jsx              # Main layout
├── App.css              # App-level styles
├── index.css            # Global CSS reset
├── main.jsx             # Entry point (theme provider, CssBaseline)
├── theme.js             # MUI theme (palette customization)
└── components/
    ├── URMForm.jsx      # Code editor + "Start Simulation" button
    ├── CodeLineProcessor.js  # Interpreter / instruction executor
    ├── Register.jsx     # Single register display card
    └── RegisterList.jsx # Grid of all 64 registers
```

---

## Housekeeping Notes

These are known rough edges kept intentionally to reflect the original undergraduate work:

- **No error handling** — invalid instructions or malformed lines are silently ignored.
- **`goto` is 0-indexed against the raw line array** — after blank lines are filtered, the indices may surprise users.

---

## License

MIT
