import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import QuoteAddForm from "./QuoteAddForm";
import Popup from "../../Layouts/Popup";
import NewButton from "../../FormControls/Button";

const columns = [
  {
    field: "artId",
    headerName: "Quote Number",
    width: 125,
    headerAlign: "center",
    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-artwork/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  { field: "height", headerName: "Height", headerAlign: "center" },
  { field: "width", headerName: "Width", headerAlign: "center" },
  {
    field: "colorQuantity",
    headerName: "Color Quantity",
    width: 125,
    headerAlign: "center",
  },
  {
    field: "materialQuantity",
    headerName: "Material Quantity",
    width: 150,
    headerAlign: "center",
  },
  { field: "cost", headerName: "Cost", headerAlign: "center" },
];

function ViewAllQuotes() {
  const [tableData, setTableData] = useState([]);
  const [addDisplay, setAddDisplay] = useState(false);

  const openAddDisplay = () => {
    setAddDisplay(true);
  };

  useEffect(() => {
    fetch("https://localhost:7143/api/art")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  return (
    <div>
      <div style={{ height: 700, width: "95%" }}>
      <div align="right">
        <NewButton size="small" variant="contained" onClick={openAddDisplay}
                  style={{
                    backgroundColor: "pink",
                  }}>
          Add Quote
        </NewButton>
        <Popup
          title="Add Quote"
          openPopup={addDisplay}
          setOpenPopup={setAddDisplay}
        >
          <QuoteAddForm />
        </Popup>
      </div>
      <br></br>
        <DataGrid
          getRowId={(row) => row.artId}
          rows={tableData}
          columns={columns}
          pageSize={100}
        />
      </div>
    </div>
  );
}

export default ViewAllQuotes;
