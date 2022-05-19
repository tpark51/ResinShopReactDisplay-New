import React, { useState } from "react";

const CustomerDeleteForm = ({ customer }) => {
    const [deleteCustomer, setDeleteCustomer] = useState(customer);

    function handleSubmit(e){
        e.preventDefault();
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
        const url = "https://localhost:7143/api/customer/" + document.getElementById("customerId").value;

        fetch(url, init)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
            }
            else{
                alert("Customer " + document.getElementById("customerId").value + " Successfuly deleted.");
            }
        })
        window.location = `http://localhost:3000/all-customers`;
    }

  return (
    <>
    <form name="delete-form-2" onSubmit = {handleSubmit}>
        <label>Customer ID: </label>
        <input type="number" id = "customerId"
        readOnly={true}
        value={deleteCustomer.customerId}></input>
        <p> Are you sure you want to delete Customer {deleteCustomer.customerId}?</p>
        <input type="submit" value="Delete" />
    </form>
    </>
  )
}

export default CustomerDeleteForm;