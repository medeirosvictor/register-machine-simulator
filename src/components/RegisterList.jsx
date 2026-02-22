import React from 'react';
import Register from './Register'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    registercontainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
    }
})

const RegisterList = ({ RL }) => {
    const classes = useStyles()

    return (
        <div className={classes.registercontainer}>
            {RL.map((r, index) => (
                <Register registerId={index} registerValue={r} key={index} />
            ))}
        </div>
    )
};

export default RegisterList;
