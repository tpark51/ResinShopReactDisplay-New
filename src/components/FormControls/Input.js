
import React from 'react'
import { Grid, TextField } from '@mui/material';

function Input(props) {

    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField fullWidth
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}

export default Input;
