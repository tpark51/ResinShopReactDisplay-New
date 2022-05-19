import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent, Container } from "@mui/material";
import NewButton from "../../FormControls/Button";
import { Grid } from "@mui/material";
import Popup from "../../Layouts/Popup";
import { useParams } from "react-router-dom";
import QuoteEditForm from "./QuoteEditForm";
import QuoteDeleteForm from "./QuoteDeleteForm";

function ViewOneQuote() {
  let { id } = useParams();

  const [view, setView] = useState([]);
  const [editDisplay, setEditDisplay] = useState(false);
  const [deleteDisplay, setDeleteDisplay] = useState(false);

  useEffect(() => {
    fetch(`https://localhost:7143/api/art/${id}`)
      .then((data) => data.json())
      .then((data) => setView(data));
  });

  const openEditDisplay = () => {
    setEditDisplay(true);
  };
  const openDeleteDisplay = () => {
    setDeleteDisplay(true);
  };

  return (
    <Container align="center">
      <div style={{ width: "50%" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <p>Artwork Id: {view.artId}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Total: ${view.cost}</p>
              </Grid>
            </Grid>
            <p>
              Size: {view.height} x {view.width}
            </p>
            <p>Color Quantity: {view.colorQuantity}</p>
            <p>Material Quantity: {view.materialQuantity}</p>

            <br></br>
            <NewButton
              size="small"
              variant="outlined"
              onClick={openDeleteDisplay}
            >
              Delete Artwork
            </NewButton>
            <NewButton
              size="small"
              variant="contained"
              onClick={openEditDisplay}
              style={{
                backgroundColor: "pink",
              }}
            >
              Edit Artwork
            </NewButton>
          </CardContent>
        </Card>
      </div>
      <Popup
        title="Edit Artwork"
        openPopup={editDisplay}
        setOpenPopup={setEditDisplay}
      >
        <QuoteEditForm />
      </Popup>
      <Popup
        title="Delete Artwork"
        openPopup={deleteDisplay}
        setOpenPopup={setDeleteDisplay}
      >
        <QuoteDeleteForm />
      </Popup>
    </Container>
  );
}

export default ViewOneQuote;
