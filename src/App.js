import React from 'react';
import './App.css';
import Register from './components/Register'
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
    registercontainer: {
        display: 'flex',
        flexWrap: 'wrap'
    }
})

function App() {
    const classes = useStyles()

    let reglist = new Array(64)
    reglist.fill(0)
    console.log(reglist)

    return (
        <div className="App">
            <Container>
                <Typography className={classes.h1} variant="h1" component="h1">
                    Register Machine Simulator
                </Typography>
                <URMForm />
                <div className={classes.registercontainer}>
                    {
                        reglist.map((el, index) => {
                            console.log(index)
                            return (<Register registerId={index} registerValue={"0"} key={index}/>)
                        })
                    }
                </div>
            </Container>
        </div>
    );
}

export default App;
