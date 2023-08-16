import React from "react";

function Edit(props) {
    const cat = props.cat
  return (
    <div>
    <form action={`/cats/${cat._id}?_method=PUT`} method="POST">

        Name:{" "}
        <input type="text" name="name" defaultValue={cat.name} />
        <br />
        Age:{" "}
        <input type="text" name="age" defaultValue={cat.age} />
        <br />
        Has Had First Checkup?:
        {cat.hadFirstCheckup ? (
          <input type="checkbox" name="hadFirstCheckup" defaultChecked />
        ) : (
          <input type="checkbox" name="hadFirstCheckup" />
        )}
        <br />
        Description:{" "}
        <input type="text" name="description" defaultValue={cat.description} />
        <br /> 
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}

export default Edit;