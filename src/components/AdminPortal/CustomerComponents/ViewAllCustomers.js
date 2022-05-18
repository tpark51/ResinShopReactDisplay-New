import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import NewButton from "../../FormControls/Button";
import CustomerAddForm from "./CustomerAddForm";
import Popup from "../../Layouts/Popup";

const columns = [
  {
    field: "customerId",
    headerName: "CustomerId",
    headerAlign: "center",
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-customer/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  { field: "firstName", headerName: "First Name", headerAlign: "center" },
  { field: "lastName", headerName: "Last Name", headerAlign: "center" },
  { field: "email", headerName: "Email", headerAlign: "center" },
  { field: "phoneNumber", headerName: "Phone", headerAlign: "center" },
  { field: "streetAddress", headerName: "Address", headerAlign: "center" },
  { field: "city", headerName: "City", headerAlign: "center" },
  { field: "stateName", headerName: "State", headerAlign: "center" },
  { field: "zipCode", headerName: "ZipCode", headerAlign: "center" },
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
    <div style={{ height: 700, width: "100%" }}>
      <div align="right">
        <NewButton size="small" variant="contained" onClick={openAddDisplay}
                  style={{
                    backgroundColor: "pink",
                  }}>
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
