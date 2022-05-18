import React from 'react'

const GetForm2 = () => {

    function handleSubmit(e){
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
            document.getElementById("customerHeader").innerHTML = "Displaying Art ID#" + json.customerId;
            document.getElementById("customerName").innerHTML = json.firstName + " " + json.lastName;
            document.getElementById("customerInfo").innerHTML = "Email: " + json.email + "StreetAddress: " + json.streetAddress;
            document.getElementById("customerMoreInfo").innerHTML = "City: " + json.city + "StateName: " + json.stateName + "ZipCode: " + json.zipCode + "PhoneNumber: " + json.phoneNumber;
        });
    }

  return (
    <div>
    <br/>
    <h3>SEARCH</h3>
    <form name = "select-from-2" onSubmit = {handleSubmit}>
        <label>Customer ID: </label>
        <input type= "number" id="customerId"></input>
        <input type="submit" value="View"></input>
    </form>
    <h5 id = "customerHeader"></h5>
    <p id = "customerName"></p>
    <p id = "customerInfo"></p>
    <p id = "customerMoreInfo"></p>
    </div>
  )
}

export default GetForm2