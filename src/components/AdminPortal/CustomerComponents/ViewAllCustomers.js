import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import NewButton from "../../FormControls/Button";
import CustomerAddForm from "./CustomerAddForm";
import Popup from "../../Layouts/Popup";
import { Container, Typography } from "@mui/material";

const columns = [
  {
    field: "customerId",
    headerName: "CustomerId",
    headerAlign: "center",
    align: "center",
    minWidth: 50,
    flex: 1,
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-customer/${rowData.id}`}>
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
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "phoneNumber",
    headerName: "Phone",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "streetAddress",
    headerName: "Address",
    headerAlign: "center",
    align: "center",
    minWidth: 105,
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "stateName",
    headerName: "State",
    headerAlign: "center",
    align: "center",
    minWidth: 75,
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "ZipCode",
    headerAlign: "center",
    align: "center",
    minWidth: 90,
    flex: 1,
  },
];

function ViewAllCustomers() {
  const [tableData, setTableData] = useState([]);
  const [addDisplay, setAddDisplay] = useState(false);

  const openAddDisplay = () => {
    setAddDisplay(true);
  };

  useEffect(() => {
    fetch("https://localhost:7143/api/customer")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  return (
    <div
      style={{ height: 700, width: "95%", alignItems: "center" }}
      align="center"
    >
      <div align="right">
        <Typography gutterBottom variant="h4" align="center">
          Customers
        </Typography>
        <NewButton
          size="small"
          variant="contained"
          onClick={openAddDisplay}
          style={{
            backgroundColor: "pink",
          }}
        >
          Add Customer
        </NewButton>
        <Popup
          title="Add Customer"
          openPopup={addDisplay}
          setOpenPopup={setAddDisplay}
        >
          <CustomerAddForm />
        </Popup>
      </div>
      <br></br>
      <DataGrid
        getRowId={(row) => row.customerId}
        rows={tableData}
        columns={columns}
        pageSize={100}
      />
    </div>
  );
}

export default ViewAllCustomers;
