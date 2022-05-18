import React from 'react'
import { useState } from 'react'
import Home2 from './Home2'
import AddForm2 from './AddForm2'
import GetForm2 from './GetForm2'
import DeleteForm2 from './DeleteForm2'
import UpdateForm2 from './UpdateForm2'


const HomePage2 = () => {
    const [display, setDisplay] = useState("none");
  return (
    <div>
        <div id = "nav-bar">
            <Home2 Name="Add Customer" onShow = {()=>setDisplay("add")}/>
            <Home2 Name = "View Customer" onShow = {()=>setDisplay("view")} />
            <Home2 Name = "Delete Customer" onShow = {()=>setDisplay("delete")} />
            <Home2 Name = "Update Cutsomer" onShow = {()=>setDisplay("update")} />
        </div>
        {(display === "add") && <AddForm2 />}
        {(display === "view") && <GetForm2 />}
        {(display === "delete") && <DeleteForm2 />}
        {(display === "update") && <UpdateForm2 />}
    </div>
  )
}

export default HomePage2