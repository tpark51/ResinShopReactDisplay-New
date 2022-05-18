import React from 'react'

const GetOrder = () => {

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://localhost:7143/api/order/" + document.getElementById("orderId").value)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("orderHeader").innerHTML = "Displaying Order ID #: " + json.orderId;
            document.getElementById("orderDate").innerHTML = "Order Date: " + json.orderDate;
            document.getElementById("orderInfo").innerHTML = "CustomerId: " + json.customerId + " ArtId: " + json.artId;
        });
    }

  return (
    <div>
    <br/>
    <h3>SEARCH</h3>
    <form name = "select-order" onSubmit = {handleSubmit}>
        <label>Order ID: </label>
        <input type= "number" id="orderId"></input>
        <input type="submit" value="View"></input>
    </form>
    <h5 id = "orderHeader"></h5>
    <p id = "orderDate"></p>
    <p id = "orderInfo"></p>
    </div>
  )
}

export default GetOrder;