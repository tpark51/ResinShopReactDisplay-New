import React from "react";
const QuoteAddForm = () => {
  function handleSubmit(e) {
    e.preventDefault();

    let art = {
      Height: document.getElementById("Height").value,
      Width: document.getElementById("Width").value,
      MaterialQuantity: document.getElementById("MaterialQuantity").value,
      ColorQuantity: document.getElementById("ColorQuantity").value,
      Cost: document.getElementById("Cost").value,
      AdvancedFeatureId: document.getElementById("AdvancedFeatureId").value,
    };

    const url = "https://localhost:7143/api/art";

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(art),
    };

    fetch(url, init)
      .then((response) => {
        if (response.status !== 201) {
          alert("Error: status " + response.status);
          return Promise.reject(response.status);
        }
        return response.json();
      })
      .then((json) => {
        alert("successfully added new art with ID of " + json.artId);
      });
  }

  return (
    <>
      <form name="add-form" onSubmit={handleSubmit}>
        <label>Height (inches): </label>
        <input type="text" name="Height" id="Height" />
        <br></br>
        <label>Width (inches): </label>
        <input type="text" name="Width" id="Width" />
        <br></br>
        <label>MaterialQuantity: </label>
        <input type="number" id="MaterialQuantity" /> <br></br>
        <label>ColorQuantity: </label>
        <input type="number" step="1" id="ColorQuantity" /> <br></br>
        <label>Cost: </label>
        <input type="number" step="0.01" id="Cost" />
        <br></br>
        <label>AdvancedFeatureId: </label>
        <input type="number" id="AdvancedFeatureId" /> <br></br>
        <input type="submit" value="Add Quote" />
      </form>
    </>
  );
};

export default QuoteAddForm;
