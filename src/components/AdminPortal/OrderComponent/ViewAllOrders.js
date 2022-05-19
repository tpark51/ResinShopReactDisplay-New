import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import OrderAddForm from "./OrderAddForm";
import Popup from "../../Layouts/Popup";
import NewButton from "../../FormControls/Button";
import { Typography } from "@mui/material";

const columns = [
  {
    field: "orderId",
    headerName: "OrderId",
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
    field: "orderDate",
    headerName: "Order Date",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
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
  {
    field: "cost",
    headerName: "Cost",
    type: "decimal",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
];

function ViewAllOrders() {
  const [tableData, setTableData] = useState([]);
  const [addDisplay, setAddDisplay] = useState(false);

  const openAddDisplay = () => {
    setAddDisplay(true);
  };

  useEffect(() => {
    fetch("https://localhost:7143/api/reports/orderdisplay")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  return (
    <div style={{ height: 700, width: "100%", align: "center" }}>
      <div align="right">
        <Typography gutterBottom variant="h4" align="center">
          Orders
        </Typography>
        <NewButton
          size="small"
          variant="contained"
          onClick={openAddDisplay}
          style={{
            backgroundColor: "pink",
          }}
        >
          Add Order
        </NewButton>
        <Popup
          title="Add Order"
          openPopup={addDisplay}
          setOpenPopup={setAddDisplay}
        >
          <OrderAddForm />
        </Popup>
      </div>
      <br></br>
      <DataGrid
        getRowId={(row) => row.orderId}
        rows={tableData}
        columns={columns}
        pageSize={100}
      />
    </div>
  );
}

export default ViewAllOrders;
