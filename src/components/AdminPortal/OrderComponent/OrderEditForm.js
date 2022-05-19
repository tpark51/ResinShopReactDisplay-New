import React, { useState } from 'react'

const OrderEditForm = ({ order }) => {
    const [editOrder, setEditOrder] = useState(order);

    function handleFinder(e){
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
            document.getElementById("orderHeader").innerHTML = "Displaying Order ID#" + json.orderId;
            document.getElementById("orderDate").innerHTML = json.orderDate;
            document.getElementById("orderInfo").innerHTML = "CustomerId: " + json.customerId + " ArtId: " + json.artId;
        });
    }
    function handleFiller(e){
        e.preventDefault();

        let order = {
            orderId: editOrder.orderId,
            orderDate: editOrder.orderDate,
            CustomerId: editOrder.customerId,
            ArtId: editOrder.artId,
        }

        const url = "https://localhost:7143/api/order";

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(order)
        };

        fetch(url, init)
        .then(response => {
            if (response.status !== 200){
                response.json().then((t) => {
                    console.log(t);
                });
                alert("error: " + response.status);
            }
            else{
                alert("Successfully updated order " + document.getElementById("orderId").value)
            }
        })
        window.location = `http://localhost:3000/view-order/${editOrder.orderId}`;
    }

  return (
    <div>
    <form name = "update-order" onSubmit = {handleFiller}>
    <div style={{display:'flex', alignContent:'space-between'}}>
        <label>Order ID: </label>
        <input type= "number" id="orderId" readOnly={true}
          value={editOrder.orderId}></input>
        </div>
        <div style={{display:'flex', alignContent:'space-between'}}>
    <label>Order Date: </label>
      <input type="text" name="orderDate" id="orderDate" 
          value={editOrder.orderDate}onChange={(e) => {
            setEditOrder({ ...editOrder, orderDate: e.target.value });
          }}/>
          </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
      <label>CustomerId: </label>
      <input type = "number" id = "CustomerId" readOnly={true}
          value={editOrder.customerId}></input> </div>
          <div style={{display:'flex', alignContent:'space-between'}}>
      <label>ArtId: </label>
      <input type = "number" id = "ArtId" readOnly={true}
          value={editOrder.artId}></input> 
      </div>
      <input type="submit" value="Update Order" /> 
    </form>
    </div>
  );
};

export default OrderEditForm;