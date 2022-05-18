import React from 'react'

const QuoteEditForm = () => {

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
            ArtId: document.getElementById("artId").value,
            Height: document.getElementById("Height").value,
            Width: document.getElementById("Width").value,
            MaterialQuantity: document.getElementById("MaterialQuantity").value,
            ColorQuantity: document.getElementById("ColorQuantity").value,
            Cost: document.getElementById("Cost").value,
            AdvancedFeatureId: document.getElementById("AdvancedFeatureId").value
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
    }

  return (
    <div>
    <form name = "update-form-1" onSubmit = {handleFinder}>
        <label>Art ID: </label>
        <input type= "number" id="artId"></input>
        <input type="submit" value="Find"></input>
    </form>
    <form name = "update-form-2" onSubmit = {handleFiller}>
    <label>Height (inches): </label>
      <input type="text" name="Height" id="Height"/><br></br>
      <label>Width (inches): </label>
      <input type="text" name="Width" id="Width"/><br></br>
      <label>MaterialQuantity: </label>
      <input type = "number" id = "MaterialQuantity" /> <br></br>
      <label>ColorQuantity: </label>
      <input type="number" step="1" id="ColorQuantity" /> <br></br>
      <label>Cost: </label>
      <input type="number" step="0.01" id="Cost"/><br></br>
      <label>AdvancedFeatureId: </label>
      <input type = "number" id = "AdvancedFeatureId" /> <br></br>
      <input type="submit" value="Update Quote" />
    </form>
    </div>
  )
}

export default QuoteEditForm;