import React, { useState } from 'react'

const QuoteEditForm = ({ art }) => {
    const [editArt, setEditArt] = useState(art);
    function handleFinder(e){
        e.preventDefault();
        fetch("https://localhost:7143/api/art/" + document.getElementById("artId").value)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("artHeader").innerHTML = "Displaying Art ID#" + json.artId;
            document.getElementById("artDimensions").innerHTML = json.height + " X " + json.width;
            document.getElementById("artStyle").innerHTML = "Materials: " + json.materialQuantity + "Colors: " + json.colorQuantity;
            document.getElementById("artCost").innerHTML = "Cost: $ " + json.cost;
        });
    }
    function handleFiller(e){
        e.preventDefault();

        let art = {
            ArtId: editArt.artId,
            Height: editArt.height,
            Width: editArt.width,
            MaterialQuantity: editArt.materialQuantity,
            ColorQuantity: editArt.colorQuantity,
            Cost: editArt.cost,
            AdvancedFeatureId: editArt.advancedFeatureId,
        }

        const url = "https://localhost:7143/api/art";

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(art)
        };

        fetch(url, init)
        .then(response => {
            if (response.status !== 200){
                alert("error: " + response.status);
            }
            else{
                alert("Successfully updated art " + document.getElementById("artId").value)
            }
        })
        window.location = `http://localhost:3000/view-artwork/${editArt.artId}`;
    }

  return (
    <div>
    <form name = "update-form-1" onSubmit = {handleFiller}>
    <div style={{display:'flex', alignContent:'space-between'}}>
        <label>Artwork ID: </label>
        <input type= "number" id="artId" readOnly={true}
          value={editArt.artId}></input>
        </div>
        <div style={{display:'flex', alignContent:'space-between'}}>
        <label>Height (inches): </label>
      <input type="text" name="Height" id="Height"
        value={editArt.height}
          onChange={(e) => {
            setEditArt({ ...editArt, height: e.target.value });
          }}/></div>
          <div style={{display:'flex', alignContent:'space-between'}}>
      <label>Width (inches): </label>
      <input type="text" name="Width" id="Width"
        value={editArt.width}
          onChange={(e) => {
            setEditArt({ ...editArt, width: e.target.value });
          }}/></div>
          <div style={{display:'flex', alignContent:'space-between'}}>
      <label>MaterialQuantity: </label>
      <input type = "number" id = "MaterialQuantity" 
      value={editArt.materialQuantity}
      onChange={(e) => {
        setEditArt({ ...editArt, materialQuantity: e.target.value });
      }}/></div>
      <div style={{display:'flex', alignContent:'space-between'}}>
      <label>ColorQuantity: </label>
      <input type="number" step="1" id="ColorQuantity" 
      value={editArt.colorQuantity}
      onChange={(e) => {
        setEditArt({ ...editArt, colorQuantity: e.target.value });
      }}/></div>
      <div style={{display:'flex', alignContent:'space-between'}}>
      <label>Cost: </label>
      <input type="number" step="0.01" id="Cost"
      value={editArt.cost}
      onChange={(e) => {
        setEditArt({ ...editArt, cost: e.target.value });
      }}/></div>
      <div style={{display:'flex', alignContent:'space-between'}}>
      <label>AdvancedFeatureId: </label>
      <input type = "number" id = "AdvancedFeatureId" readOnly={true}
          value={editArt.advancedFeatureId}></input> 
      </div>
      <input type="submit" value="Update Artwork" />
    </form>
    </div>
  )
}

export default QuoteEditForm;