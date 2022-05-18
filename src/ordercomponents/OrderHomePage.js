import React from 'react'
import { useState } from 'react'
import OrderHome from './OrderHome'
import AddOrder from './AddOrder'
import GetOrder from './GetOrder'
import DeleteOrder from './DeleteOrder'
import UpdateOrder from './UpdateOrder'


const OrderHomePage = () => {
    const [display, setDisplay] = useState("none");
  return (
    <div>
        <div id = "nav-bar">
            <OrderHome Name ="Add Order" onShow = {()=>setDisplay("add")}/>
            <OrderHome Name = "View Order" onShow = {()=>setDisplay("view")} />
            <OrderHome Name = "Delete Order" onShow = {()=>setDisplay("delete")} />
            <OrderHome Name = "Update Order" onShow = {()=>setDisplay("update")} />
        </div>
        {(display === "add") && <AddOrder />}
        {(display === "view") && <GetOrder />}
        {(display === "delete") && <DeleteOrder />}
        {(display === "update") && <UpdateOrder />}
    </div>
  )
}

export default OrderHomePage;