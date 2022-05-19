import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Typography } from "@mui/material";
import QuoteAddForm from "./QuoteAddForm";
import Popup from "../../Layouts/Popup";
import NewButton from "../../FormControls/Button";

const columns = [
  {
    field: "artId",
    headerName: "Artwork Id",
    width: 125,
    headerAlign: "center",
    align: 'center',
  minWidth: 90,
  flex: 1,

    renderCell: (rowData) => (
      <Link href={`http://localhost:3000/view-artwork/${rowData.id}`}>
        {rowData.id}
      </Link>
    ),
  },
  { field: "height", headerName: "Height", headerAlign: "center", align: 'center',   minWidth: 90,
  flex: 1, },
  { field: "width", headerName: "Width", headerAlign: "center", align: 'center',   minWidth: 90,
  flex: 1, },
  {
    field: "colorQuantity",
    headerName: "Color Quantity",
    width: 125,
    headerAlign: "center", 
    align: 'center',
    minWidth: 90,
    flex: 1,
  },
  {
    field: "materialQuantity",
    headerName: "Material Quantity",
    width: 150,
    headerAlign: "center",
    align: 'center',
    minWidth: 90,
    flex: 1,
  },
  { field: "cost", headerName: "Cost", headerAlign: "center", align: 'center',   minWidth: 90,
  flex: 1,},
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
      <Typography gutterBottom variant="h4" align="center">
        Artwork
      </Typography>
        <NewButton size="small" variant="contained" onClick={openAddDisplay}
                  style={{
                    backgroundColor: "pink",
                  }}>
          Add Artwork
        </NewButton>
        <Popup
          title="Add Artwork"
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
