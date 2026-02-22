import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    paper: {
        width: 88,
        height: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#363c42',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 8,
        margin: 4,
        transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s',
    },
    active: {
        backgroundColor: 'rgba(175, 85, 214, 0.18)',
        borderColor: 'rgba(175, 85, 214, 0.35)',
        transform: 'scale(1.04)',
    },
    registerId: {
        fontSize: '0.65rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.4)',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    registerValue: {
        fontSize: '1.15rem',
        fontWeight: 700,
        fontFamily: "'SF Mono', 'Fira Code', monospace",
        marginTop: 2,
    }
})

export default function Register({ registerId, registerValue }) {
    const classes = useStyles()
    const isActive = registerValue !== 0

    return (
        <Paper
            className={`${classes.paper} ${isActive ? classes.active : ''}`}
            elevation={0}
        >
            <div className={classes.registerId}>
                r{registerId}
            </div>
            <div className={classes.registerValue}>
                {registerValue}
            </div>
        </Paper>
    )
}
