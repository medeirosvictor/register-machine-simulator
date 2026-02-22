import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import URMForm from './components/URMForm';

const useStyles = makeStyles({
    root: {
      textAlign: "center",
      height: '100vh'
    },
    h1: {
        fontSize: 40,
        display: 'block',
        margin: '20px auto'
    },
})

function App() {
    const classes = useStyles()

    let reglist = new Array(64)
    reglist.fill(0)

    return (
        <div className="App">
            <Container>
                <Typography className={classes.h1} variant="h1" component="h1">
                    Register Machine Simulator
                </Typography>
                <URMForm />
            </Container>
        </div>
    );
}

export default App;
