import React from 'react'

const CustomerDeleteForm = () => {

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
    }

  return (
    <>
    <form name="delete-form-2" onSubmit = {handleSubmit}>
        <label>Customer ID: </label>
        <input type="number" id = "customerId"></input>
        <input type="submit" value="Delete" />
    </form>
    </>
  )
}

export default CustomerDeleteForm;