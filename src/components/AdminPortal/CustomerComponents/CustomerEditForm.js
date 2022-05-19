import React, { useState } from "react";
import { Container } from "@mui/material";
import ViewOneCustomer from "./ViewOneCustomer";

const CustomerEditForm = ({ customer }) => {
  const [editCustomer, setEditCustomer] = useState(customer);
  function handleFinder(e) {
    e.preventDefault();
    fetch(
      "https://localhost:7143/api/customer/" +
        document.getElementById("customerId").value
    )
      .then((response) => {
        if (response.status !== 200) {
          alert("Error: status " + response.status);
          return Promise.reject(response.status);
        }
        return response.json();
      })
      .then((json) => {
        document.getElementById("customerHeader").innerHTML =
          "Displaying Customer ID#" + json.customerId;
        document.getElementById("customerName").innerHTML =
          json.firstName + " " + json.lastName;
        document.getElementById("customerInfo").innerHTML =
          "Email: " + json.email + "StreetAddress: " + json.streetAddress;
        document.getElementById("customerMoreInfo").innerHTML =
          "City: " +
          json.city +
          "StateName: " +
          json.stateName +
          "ZipCode: " +
          json.zipCode +
          "PhoneNumber: " +
          json.phoneNumber;
      });
  }
  function handleFiller(e) {
    e.preventDefault();

    let customer = {
      CustomerId: editCustomer.customerId,
      FirstName: editCustomer.firstName,
      LastName: editCustomer.lastName,
      Email: editCustomer.email,
      StreetAddress: editCustomer.streetAddress,
      City: editCustomer.city,
      StateName: editCustomer.stateName,
      ZipCode: editCustomer.zipCode,
      PhoneNumber: editCustomer.phoneNumber,
    };

    const url = "https://localhost:7143/api/customer";

    const init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(customer),
    };

    fetch(url, init).then((response) => {
      if (response.status !== 200) {
        response.json().then((t) => {
          console.log(t);
        });
        alert("error: " + response.status);
      } else {
        alert(
          "Successfully updated customer " +
            document.getElementById("customerId").value
        );
      }
    });
    window.location = `http://localhost:3000/view-customer/${editCustomer.customerId}`;
  }

  return (
    <div align="center">
      <Container>
        <form name="update-form-2" onSubmit={handleFiller}>
        <div style={{display:'flex', alignContent:'space-between'}}>
        <label>Customer ID: </label>
          <input type="number" id="customerId" readOnly={true}
          value={editCustomer.customerId}></input>
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
            <label>First: </label>
            <input type="text" name="FirstName" id="FirstName"
              value={editCustomer.firstName}
              onChange={(e) => {
                setEditCustomer({ ...editCustomer, firstName: e.target.value });
              }}/>     
              </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>Last: </label>
          <input type="text" name="LastName" id="LastName" 
          value={editCustomer.lastName}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, lastName: e.target.value });
          }}/>
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>Email: </label>
          <input type="text" name="Email" id="Email" 
          value={editCustomer.email}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, email: e.target.value });
          }}/> 
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>Address: </label>
          <input type="text" name="StreetAddress" id="StreetAddress" 
          value={editCustomer.streetAddress}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, streetAddress: e.target.value });
          }}/>
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>City: </label>
          <input type="text" name="City" id="City" 
          value={editCustomer.city}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, city: e.target.value });
          }}/> 
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>State: </label>
          <input type="text" name="StateName" id="StateName" 
          value={editCustomer.stateName}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, stateName: e.target.value });
          }}/> </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>Zip Code: </label>
          <input type="text" name="ZipCode" id="ZipCode" 
          value={editCustomer.zipCode}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, zipCode: e.target.value });
          }}/> </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
          <label>Phone: </label>
          <input type="text" name="PhoneNumber" id="PhoneNumber" 
          value={editCustomer.phoneNumber}
          onChange={(e) => {
            setEditCustomer({ ...editCustomer, phoneNumber: e.target.value });
          }}/> </div>
          <input type="submit" value="Update Customer" />
          
        </form>
      </Container>
    </div>
  );
};

export default CustomerEditForm;
