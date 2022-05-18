import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent, Container } from "@mui/material";
import NewButton from "../FormControls/Button";
import { Grid } from "@mui/material";
import Popup from "./Popup";
import EditQuoteForm from "../ClientPortal/EditQuoteForm";
import DeleteQuoteForm from "../ClientPortal/DeleteQuoteForm";

const rows = [
    {field: 'artId', headerName: 'Quote Number'},
    {field: 'height', headerName: 'Height'},
    {field: 'width', headerName: 'Width'},
    {field: 'colorQuantity', headerName: 'Color Quantity'},
    {field: 'materialQuantity', headerName: 'Material Quantity'},
    {field: 'cost', headerName: 'Cost'},
]

function ViewOneDisplay() {
  const [view, setView] = useState([]);
  const [editDisplay, setEditDisplay] = useState(false);
  const [deleteDisplay, setDeleteDisplay] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7143/api/art/1")
      .then((data) => data.json())
      .then((data) => setView(data));
  });

  const openEditDisplay = () =>{
    setEditDisplay(true);
  }
  const openDeleteDisplay = () =>{
    setDeleteDisplay(true);
  }

  return (
      <Container align='center'>
    <div style={{ width: "50%" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Grid container>
            <Grid item xs={6}><p>Quote Number: {view.artId}</p></Grid>
            <Grid item xs={6}><p>Total: ${view.cost}</p></Grid>
            </Grid>
            <p>Size: {view.height} x {view.width}</p>
            <p>Color Quantity: {view.colorQuantity}</p>
            <p>Material Quantity: {view.materialQuantity}</p>

            <br></br>
          <NewButton size="small" variant="outlined" onClick={openEditDisplay}>
            Edit Quote
          </NewButton>
          <NewButton size="small" variant="contained">
            Order Now
          </NewButton>
          <p fontsize="small" onClick={openDeleteDisplay}>Delete</p>
        </CardContent>
      </Card>
    </div>
    <Popup
    title="Edit Quote"
    openPopup={editDisplay}
    setOpenPopup={setEditDisplay}>
      <EditQuoteForm />
    </Popup>
    <Popup
    title="Delete Quote"
    openPopup={deleteDisplay}
    setOpenPopup={setDeleteDisplay}>
      <DeleteQuoteForm />
    </Popup>
    </Container>
  );
}

export default ViewOneDisplay;
