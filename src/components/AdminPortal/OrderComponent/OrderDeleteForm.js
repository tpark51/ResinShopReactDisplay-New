import React, { useState } from 'react'

const OrderDeleteForm = ({ order}) => {
    const [deleteOrder, setDeleteOrder] = useState(order);

    function handleSubmit(e){
        e.preventDefault();
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
        const url = "https://localhost:7143/api/order/" + document.getElementById("orderId").value;

        fetch(url, init)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
            }
            else{
                alert("Order " + document.getElementById("orderId").value + " Successfuly deleted.");
            }
        })
        window.location = `http://localhost:3000/all-orders`;
    }

  return (
    <>
    <form name="delete-order" onSubmit = {handleSubmit}>
        <label>Order ID: </label>
        <input type="number" id = "orderId"
        readOnly={true}
        value={deleteOrder.orderId}></input>
        <p> Are you sure you want to delete Order {deleteOrder.orderId}?</p>
        <input type="submit" value="Delete" />
    </form>
    </>
  )
}

export default OrderDeleteForm;