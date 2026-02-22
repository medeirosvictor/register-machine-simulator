import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import URMForm from './components/URMForm';

const INSTRUCTIONS = [
    ['init rN V', 'set register to V'],
    ['inc rN', 'add 1'],
    ['dec rN', 'subtract 1'],
    ['set0 rN', 'zero out'],
    ['set rN rM', 'copy rM → rN'],
    ['add rN rM', 'rN = rN + rM'],
    ['if is0 rN', 'branch if zero'],
    ['if notis0 rN', 'branch if non-zero'],
    ['else', 'else branch'],
    ['goto L', 'jump to line L'],
];

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>Register Machine Simulator</h1>
                <p className="subtitle">
                    An interactive URM (Unlimited Register Machine) interpreter
                </p>
            </header>

            <section className="about-section">
                <Paper className="about-card" elevation={0}>
                    <h3>What is this?</h3>
                    <p>
                        A <strong>Register Machine</strong> is a theoretical model of computation —
                        like a Turing Machine, but using numbered registers instead of a tape.
                        Each register (<code>r0</code>, <code>r1</code>, …) holds a natural number,
                        and a program is a sequence of simple instructions that manipulate them.
                    </p>
                    <p>
                        URMs are <strong>Turing-complete</strong>: anything computable can be expressed
                        with just increment, decrement, zero-test, and jumps.
                        This simulator lets you write and run URM programs to see how
                        low-level computation actually works.
                    </p>
                </Paper>
            </section>

            <div className="main-content">
                <URMForm />

                <Paper className="reference-card" elevation={0}>
                    <h4>Instruction Reference</h4>
                    {INSTRUCTIONS.map(([cmd, desc]) => (
                        <div className="ref-row" key={cmd}>
                            <span className="ref-cmd">{cmd}</span>
                            <span className="ref-desc">{desc}</span>
                        </div>
                    ))}
                </Paper>
            </div>

            <footer className="app-footer">
                Undergraduate computability theory project&ensp;·&ensp;
                <a
                    href="https://github.com/medeirosvictor/register-machine-simulator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Source on GitHub
                </a>
            </footer>
        </div>
    );
}

export default App;
