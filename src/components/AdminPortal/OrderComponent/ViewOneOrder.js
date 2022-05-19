import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent, Container } from "@mui/material";
import NewButton from "../../FormControls/Button";
import { Grid } from "@mui/material";
import Popup from "../../Layouts/Popup";
import { useParams } from "react-router-dom";
import OrderEditForm from "./OrderEditForm";
import OrderDeleteForm from "./OrderDeleteForm";

function ViewOneOrder() {
  let { id } = useParams();

  const [view, setView] = useState([]);
  const [editDisplay, setEditDisplay] = useState(false);
  const [deleteDisplay, setDeleteDisplay] = useState(false);

  useEffect(() => {
    fetch(`https://localhost:7143/api/order/${id}`)
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
                <p>Order Id: {view.artId}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Date: {view.orderDate}</p>
              </Grid>
            </Grid>
            <p>
              CustomerId: {view.customerId}
            </p>
            <p>ArtworkId: {view.artId}</p>
            <br></br>
            <NewButton
              size="small"
              variant="outlined"
              onClick={openDeleteDisplay}
              style={{
                borderColor: "pink",
                color: "pink"
              }}>
              Delete Order
            </NewButton>
            <NewButton
              size="small"
              variant="contained"
              onClick={openEditDisplay}
              style={{
                backgroundColor: "pink",
              }}
            >
              Edit Order
            </NewButton>
          </CardContent>
        </Card>
      </div>
      <Popup
        title="Edit Order"
        openPopup={editDisplay}
        setOpenPopup={setEditDisplay}
      >
        <OrderEditForm order={view}/>
      </Popup>
      <Popup
        title="Delete Order"
        openPopup={deleteDisplay}
        setOpenPopup={setDeleteDisplay}
      >
        <OrderDeleteForm order={view}/>
      </Popup>
    </Container>
  );
}

export default ViewOneOrder;
