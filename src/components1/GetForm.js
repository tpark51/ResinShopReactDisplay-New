import React from 'react'

const GetForm = () => {

    function handleSubmit(e){
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

  return (
    <div>
    <br/>
    <h3>SEARCH</h3>
    <form name = "select-from" onSubmit = {handleSubmit}>
        <label>Art ID: </label>
        <input type= "number" id="artId"></input>
        <input type="submit" value="View"></input>
    </form>
    <h5 id = "artHeader"></h5>
    <p id = "artDimensions"></p>
    <p id = "artStyle"></p>
    <p id = "artCost"></p>
    </div>
  )
}

export default GetForm;