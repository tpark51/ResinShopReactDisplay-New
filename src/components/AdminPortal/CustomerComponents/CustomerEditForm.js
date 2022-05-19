import React from 'react'
import { Container } from '@mui/material';
import ViewOneCustomer from './ViewOneCustomer';

const CustomerEditForm = (props) => {
    
    function handleFinder(e){
        e.preventDefault();
        fetch("https://localhost:7143/api/customer/" + document.getElementById("customerId").value)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("customerHeader").innerHTML = "Displaying Customer ID#" + json.customerId;
            document.getElementById("customerName").innerHTML = json.firstName + " " + json.lastName;
            document.getElementById("customerInfo").innerHTML = "Email: " + json.email + "StreetAddress: " + json.streetAddress;
            document.getElementById("customerMoreInfo").innerHTML = "City: " + json.city + "StateName: " + json.stateName + "ZipCode: " + json.zipCode + "PhoneNumber: " + json.phoneNumber;
        });
    }
    function handleFiller(e){
        e.preventDefault();

        let customer = {
            CustomerId: document.getElementById("customerId").value,
            FirstName: document.getElementById("FirstName").value,
            LastName: document.getElementById("LastName").value,
            Email: document.getElementById("Email").value,
            StreetAddress: document.getElementById("StreetAddress").value,
            City: document.getElementById("City").value,
            StateName: document.getElementById("StateName").value,
            ZipCode: document.getElementById("ZipCode").value,
            PhoneNumber: document.getElementById("PhoneNumber").value
        }

        const url = "https://localhost:7143/api/customer";

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(customer)
        };

        fetch(url, init)
        .then(response => {
            if (response.status !== 200){
                alert("error: " + response.status);
            }
            else{
                alert("Successfully updated customer " + document.getElementById("customerId").value)

            }

        })
    }

  return (
    <div align="center">
        <Container>
    <form name = "update-form-2" onSubmit = {handleFinder}>
        <label>Customer ID: </label>
        <input type= "number" id="customerId"></input>
    </form>

    <form name = "update-form-2" onSubmit = {handleFiller}>
    <label>First: </label>
      <input type="text" name="FirstName" id="FirstName"/><br></br>
      <label>Last: </label>
      <input type="text" name="LastName" id="LastName"/><br></br>
      <label>Email: </label>
      <input type = "text" name="Email" id="Email" /> <br></br>
      <label>Address: </label>
      <input type = "text" name="StreetAddress" id="StreetAddress" /> <br></br>
      <label>City: </label>
      <input type = "text" name="City" id="City" /> <br></br>
      <label>State: </label>
      <input type = "text" name="StateName" id="StateName" /> <br></br>
      <label>Zip Code: </label>
      <input type = "text" name="ZipCode" id="ZipCode" /> <br></br>
      <label>Phone: </label>
      <input type = "text" name="PhoneNumber" id="PhoneNumber" /> <br></br>
      <input type="submit" value="Update Customer" />
    </form>
    </Container>
    </div>
  )
}

export default CustomerEditForm;