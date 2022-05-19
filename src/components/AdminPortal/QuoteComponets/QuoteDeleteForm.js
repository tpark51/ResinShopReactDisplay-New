import React, { useState } from 'react';

const QuoteDeleteForm = ({ art }) => {
    const [deleteArt, setDeleteArt] = useState(art);

    function handleSubmit(e){
        e.preventDefault();
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
        const url = "https://localhost:7143/api/art/" + document.getElementById("artId").value;

        fetch(url, init)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
            }
            else{
                alert("Art " + document.getElementById("artId").value + " Successfuly deleted");
            }
        })
        window.location = `http://localhost:3000/all-artwork`;
    }

  return (
    <>
    <form name="delete-form" onSubmit = {handleSubmit}>
        <label>Artwork ID: </label>
        <input type="number" id = "artId" readOnly={true}
        value={deleteArt.artId}></input>
        <p> Are you sure you want to delete Artwork {deleteArt.artId}?</p>
        <input type="submit" value="Delete" />
    </form>
    </>
  )
}

export default QuoteDeleteForm;