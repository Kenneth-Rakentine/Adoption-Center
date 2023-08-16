import React from "react";

function New() {
  return (
    <div>
      <a href="../">Go back</a> <br />
      <form action="/dogs" method="POST">
        Name: <input type="text" name="name" />
        <br />
        age: <input type="text" name="age" /> 
        <br />
        description: <input type="text" name="description" /> 
        <br />
        breed: <input type="text" name="breed" /> 
        <br />
        <button type="submit">Create Dog</button>
      </form>
    </div>
  );
}

export default New;