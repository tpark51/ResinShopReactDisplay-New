import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";

const columns = [
    {field: 'artId', headerName: 'Quote Number', width: 125, headerAlign: 'center', 
    renderCell:rowData=><Link href={`https://localhost:7143/api/art/${rowData.id}`} target="_blank">{rowData.id}</Link> },
    {field: 'height', headerName: 'Height', headerAlign: 'center'},
    {field: 'width', headerName: 'Width', headerAlign: 'center'},
    {field: 'colorQuantity', headerName: 'Color Quantity', width: 125, headerAlign: 'center'},
    {field: 'materialQuantity', headerName: 'Material Quantity', width: 150, headerAlign: 'center'},
    {field: 'cost', headerName: 'Cost', headerAlign: 'center'},
]

function QuoteDataTable() {
    const[tableData, setTableData] = useState([]);

//TODO: Using login id to load quotes. 
    useEffect(() => {
        fetch('https://localhost:7143/api/customerquotes/{id}')
        .then((data) => data.json())
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

export default QuoteDataTable;