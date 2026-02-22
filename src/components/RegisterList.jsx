import React from 'react';
import Register from './Register'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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
