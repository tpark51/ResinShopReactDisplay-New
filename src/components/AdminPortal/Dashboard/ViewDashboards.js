import React from "react";
import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const largeOrderColumns = [
  {
    field: "orderId",
    headerName: "Order Id",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-order/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  {
    field: "artId",
    headerName: "Artwork Id",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-artwork/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  {
    field: "firstName",
    headerName: "First Name",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "cost",
    headerName: "Cost",
    headerAlign: "center",
    width: 90,
    align: "center",
    minWidth: 90,
    flex: 1,
  },
];

const largeArtColumns = [
  {
    field: "artId",
    headerName: "Artwork Id",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-artwork/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  {
    field: "firstName",
    headerName: "First Name",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "height",
    headerName: "Height",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "width",
    headerName: "Width",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
];

function ViewDashboards() {
  const [tableData, setTableData] = useState([]);
  const [largeArtData, setLargeArtData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7143/api/reports/large-order")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  useEffect(() => {
    fetch("https://localhost:7143/api/reports/large-art")
      .then((data) => data.json())
      .then((data) => setLargeArtData(data));
  });

  return (
    <Container spacing={10}>
      <div style={{ height: 500, width: "100%" }}>
        <Typography gutterBottom variant="h4" align="center">
          Dashboard
        </Typography>
        <Grid container direction="row" spacing={2}>
          <Grid item xs>
            <div>
              <div align="left" style={{ height: 500, width: "100%" }}>
                <Typography gutterBottom variant="h5" align="center">
                  Orders Over $5000
                </Typography>
                <DataGrid
                  getRowId={(row) => row.orderId}
                  rows={tableData}
                  columns={largeOrderColumns}
                  pageSize={100}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs>
            <div>
              <div style={{ height: 500, width: "100%" }}>
                <Typography gutterBottom variant="h5" align="center">
                  Large Art Pieces
                </Typography>
                <DataGrid
                  getRowId={(row) => row.artId}
                  rows={largeArtData}
                  columns={largeArtColumns}
                  pageSize={100}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default ViewDashboards;
