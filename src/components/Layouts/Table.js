import React from 'react'
import { Table } from '@mui/material';



function CustomTable(props) {

    return (
        <Table >
            {props.children}
        </Table>
    )
}
export default CustomTable;