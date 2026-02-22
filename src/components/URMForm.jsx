import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import codeLineProcessor from './CodeLineProcessor'
import RegisterList from './RegisterList'


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
    const [code, setCode] = useState()
    const [rl, setRl] = useState((new Array(64)).fill(0))

    // let rl = new Array(64)
    // rl.fill(0)

    const handleChange = (e) => {
        setCode(e.target.value)
    }

    const getLines = () => {
        let lines = code.split("\n")
        console.log(lines)

        lines = lines.filter((line) => {return line !== ""})
        console.log(lines)
        setRl(rl.fill(0))
        setRl([...codeLineProcessor(lines, rl)])
        console.log(rl)
    }

    return (
        <div>
            <Card className={classes.root}>
                <TextareaAutosize className={classes.textarea} aria-label="empty textarea" placeholder="Empty" rowsMin={10} onChange={handleChange}/>
                <Button onClick={getLines} className={classes.button} variant="contained" size="large" color="primary"> 
                    Start Simulation
                </Button>
            </Card>
            <RegisterList RL={rl}/>
        </div>
    )
}