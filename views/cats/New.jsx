import React from "react";

function New() {
  return (
    <div>
      <a href="../">Go back</a> <br />
      <form action="/cats" method="POST">
        Name: <input type="text" name="name" />
        <br />
        age: <input type="text" name="age" /> 
        <br />
        Had First Checkup: <input type="checkbox" name="hadFirstCheckup" />
        <br />
        description: <input type="text" name="description" /> 
        <br />
        <button type="submit">Create Cat</button>
      </form>
    </div>
  );
}

export default New;