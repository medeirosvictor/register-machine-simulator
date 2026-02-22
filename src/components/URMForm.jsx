import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import codeLineProcessor from './CodeLineProcessor'
import RegisterList from './RegisterList'

const SAMPLE_PROGRAM = `init r0 30
init r1 55
if is0 r1
    goto 9
if notis0 r1
    add r2 r0
    dec r1
    goto 3
else
    set r12 r3`

const useStyles = makeStyles({
    card: {
        background: 'rgba(255, 255, 255, 0.07)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    label: {
        color: '#c87eee',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        fontWeight: 600,
        textAlign: 'left',
        marginBottom: 4,
    },
    textarea: {
        width: '100%',
        minHeight: 220,
        padding: '14px 16px',
        fontFamily: "'SF Mono', 'Fira Code', 'Roboto Mono', monospace",
        fontSize: '0.88rem',
        lineHeight: 1.7,
        color: '#e0e0e0',
        background: '#2a2f35',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 8,
        resize: 'vertical',
        outline: 'none',
        tabSize: 4,
        '&:focus': {
            borderColor: 'rgba(175, 85, 214, 0.5)',
        },
        '&::placeholder': {
            color: 'rgba(255,255,255,0.25)',
        },
    },
    actions: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
    },
    button: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.85rem',
        padding: '8px 20px',
    },
    sampleBtn: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '0.82rem',
        padding: '8px 16px',
        color: 'rgba(255,255,255,0.5)',
        borderColor: 'rgba(255,255,255,0.15)',
        '&:hover': {
            borderColor: 'rgba(255,255,255,0.3)',
            color: 'rgba(255,255,255,0.7)',
        },
    },
    hint: {
        fontSize: '0.76rem',
        color: 'rgba(255,255,255,0.35)',
        textAlign: 'left',
        marginTop: -4,
        lineHeight: 1.5,
    },
})

export default function URMForm() {
    const classes = useStyles()
    const [code, setCode] = useState('')
    const [rl, setRl] = useState(new Array(64).fill(0))

    const handleChange = (e) => {
        setCode(e.target.value)
    }

    const runProgram = () => {
        const lines = code.split("\n").filter((line) => line.trim() !== "")
        const freshRegisters = new Array(64).fill(0)
        setRl(codeLineProcessor(lines, freshRegisters))
    }

    const loadSample = () => {
        setCode(SAMPLE_PROGRAM)
    }

    return (
        <div>
            <Paper className={classes.card} elevation={0}>
                <div className={classes.label}>Program</div>
                <textarea
                    className={classes.textarea}
                    placeholder={'init r0 5\ninc r0\ndec r0\n...'}
                    value={code}
                    onChange={handleChange}
                    spellCheck={false}
                />
                <div className={classes.hint}>
                    Tip: Use <code style={{ color: '#d9a8f5' }}>goto</code> with 0-indexed line numbers (blank lines excluded).
                </div>
                <div className={classes.actions}>
                    <Button
                        onClick={runProgram}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled={!code.trim()}
                    >
                        ▶ Run
                    </Button>
                    <Button
                        onClick={loadSample}
                        className={classes.sampleBtn}
                        variant="outlined"
                    >
                        Load example (30 × 55)
                    </Button>
                </div>
            </Paper>

            <div className="registers-section" style={{ maxWidth: 'none', margin: '36px 0 0', padding: 0 }}>
                <div className="registers-label">Registers</div>
                <RegisterList RL={rl} />
            </div>
        </div>
    )
}
