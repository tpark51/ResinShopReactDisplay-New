import React from 'react'
import { useState } from 'react'
import Home from './Home'
import AddForm from './AddForm'
import GetForm from './GetForm'
import DeleteForm from './DeleteForm'
import UpdateForm from './UpdateForm'


const HomePage = () => {
    const [display, setDisplay] = useState("none");
  return (
    <div>
        <div id = "nav-bar">
            <Home Name="Add Art" onShow = {()=>setDisplay("add")}/>
            <Home Name = "View Art" onShow = {()=>setDisplay("view")} />
            <Home Name = "Delete Art" onShow = {()=>setDisplay("delete")} />
            <Home Name = "Update Art" onShow = {()=>setDisplay("update")} />
        </div>
        {(display === "add") && <AddForm />}
        {(display === "view") && <GetForm />}
        {(display === "delete") && <DeleteForm />}
        {(display === "update") && <UpdateForm />}
    </div>
  )
}

export default HomePage