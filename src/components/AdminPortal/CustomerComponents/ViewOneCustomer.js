import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent, Container } from "@mui/material";
import NewButton from "../../FormControls/Button";
import Popup from "../../Layouts/Popup";
import { useParams } from "react-router-dom";
import CustomerDeleteForm from "./CustomerDeleteForm";
import CustomerEditForm from "./CustomerEditForm";


function ViewOneCustomer() {
  let { id } = useParams();

  const [view, setView] = useState([]);
  const [editDisplay, setEditDisplay] = useState(false);
  const [deleteDisplay, setDeleteDisplay] = useState(false);

  useEffect(() => {
    fetch(`https://localhost:7143/api/customer/${id}`)
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
    <>
      <Container align="center">
        <div style={{ width: "50%" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <p>
                First: {view.firstName} Last:{view.lastName}
              </p>
              <p>Email: {view.email}</p>
              <p>Address: {view.streetAddress}</p>
              <p>City: {view.city}</p>
              <p>State: {view.stateName}</p>
              <p>ZipCode: {view.zipCode}</p>
              <br></br>
              <NewButton
                size="small"
                variant="outlined"
                onClick={openDeleteDisplay}
                style={{
                  borderColor: "pink",
                  color: "pink"
                }}
              >
                Delete Customer
              </NewButton>
              <NewButton
                size="small"
                variant="contained"
                onClick={openEditDisplay}
                style={{
                  backgroundColor: "pink",
                }}
              >
                Edit Customer
              </NewButton>
            </CardContent>
          </Card>
        </div>
        <Popup
          title="Delete Customer"
          openPopup={deleteDisplay}
          setOpenPopup={setDeleteDisplay}
        >
          <CustomerDeleteForm />
        </Popup>
        <Popup
          title="Edit Customer"
          openPopup={editDisplay}
          setOpenPopup={setEditDisplay}
        >
          <CustomerEditForm />
        </Popup>
      </Container>
    </>
  );
}

export default ViewOneCustomer;
