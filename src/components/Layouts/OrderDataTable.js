import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { format } from 'date-fns';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";

const columns = [
    {field: 'orderId', headerName: 'Order Number', width: 125, headerAlign: 'center', 
    renderCell:rowData=><Link href={`https://localhost:7143/api/order/${rowData.id}`} target="_blank">{rowData.id}</Link> },
    {field: 'orderDate', headerName: 'Order Date', headerAlign: 'center', width: 150, format: 'mm/dd/yyyy'},
    {field: 'height', headerName: 'Heigh', headerAlign: 'center'},
    {field: 'width', headerName: 'Width', headerAlign: 'center'},
    {field: 'cost', headerName: 'Cost', headerAlign: 'center'},
]

function OrderDataTable() {
    const[tableData, setTableData] = useState([]);


    useEffect(() => {
        fetch("https://localhost:7143/api/customerorders/1")
        .then((data) => data.json())
        .then(format())
        .then((data) => setTableData(data))
    })



    return(
        <div style={{height: 700, width: '95%'}}>
            <DataGrid
                getRowId={(row) => row.artId}
                rows={tableData}
                columns={columns}
                pageSize={100}
            />
        </div>
    )
}

export default OrderDataTable;