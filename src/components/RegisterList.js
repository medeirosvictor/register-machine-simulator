import React from 'react';
import Register from './Register'
import { makeStyles } from '@material-ui/core/styles'

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
    },
    registercontainer: {
        display: 'flex',
        flexWrap: 'wrap'
    }
})

const RegisterList = ({RL}) => {
    const classes = useStyles()

    const registerList = RL.map((r, index) => {
        return (<Register registerId={index} registerValue={r} key={index}/>)
    });

    return (
        <div className={classes.registercontainer}>
            { registerList }
        </div>
    )
};

export default RegisterList;