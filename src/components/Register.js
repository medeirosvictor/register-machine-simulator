import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    paper: {
        width: 120,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#424242',
        margin: 5
    },
    registerId: {
        fontSize: 20,
        margin: 3,
        fontWeight: 'bold',
    },
    registerValue: {
        fontSize: 30,
        margin: 5
    }
})


export default function Register(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <div className={classes.registerId}>
                R{props.registerId}:
            </div>
            <div className={classes.registerValue}>
                {props.registerValue}
            </div>
        </Paper>
    )
}