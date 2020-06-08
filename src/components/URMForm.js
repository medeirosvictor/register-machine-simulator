import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        margin: '40px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    button: {
        marginTop: '10px',
        height: '5vh',
        maxWidth: 200,
        fontSize: 13
    },
    textarea: {
        minWidth: 300
    }
})

export default function URMForm() {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <TextareaAutosize className={classes.textarea} aria-label="empty textarea" placeholder="Empty" rowsMin={10}/>
            <Button onClick={() => console.log('ayy')} className={classes.button} variant="contained" size="large" color="primary"> 
                Start Simulation
            </Button>
        </Card>
    )
}