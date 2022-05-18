import React from 'react'
const CustomerAddForm = () => {

    function handleSubmit(e){
        e.preventDefault();


        let customer = {
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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(customer)
        };
    
        fetch(url, init)
        .then(response=>{
            if(response.status !== 201){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert("Successfully added new customer with ID of " + json.customerId)
        })
    }

  return (
    <>
    <form name = "add-form-2" onSubmit = {handleSubmit}>
      <label>First Name: </label>
      <input type="text" name="FirstName" id="FirstName"/><br></br>
      <label>Last Name: </label>
      <input type="text" name="LastName" id="LastName"/><br></br>
      <label>Email: </label>
      <input type = "text" name="Email" id="Email" /> <br></br>
      <label>Street Address: </label>
      <input type = "text" name="StreetAddress" id="StreetAddress" /> <br></br>
      <label>City: </label>
      <input type = "text" name="City" id="City" /> <br></br>
      <label>State Name: </label>
      <input type = "text" name="StateName" id="StateName" /> <br></br>
      <label>Zip Code: </label>
      <input type = "text" name="ZipCode" id="ZipCode" /> <br></br>
      <label>Phone Number: </label>
      <input type = "text" name="PhoneNumber" id="PhoneNumber" /> <br></br>
      <input type="submit" value="Add Customer" />
    </form>
    </>
  )
}

export default CustomerAddForm;