
import React from 'react'
import { Button as MuiButton } from "@mui/material";

function NewButton(props) {

    const { children, color, variant, onClick, className, ...other } = props;

    return (
        <MuiButton variant={variant || "contained" || "outlined"}
            onClick={onClick}
            {...other}>
            {children}
        </MuiButton>
    )
}

export default NewButton;