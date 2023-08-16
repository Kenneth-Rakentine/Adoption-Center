import React from "react";

function Show(props) {
  const id = props.id
  const cat = props.cat;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  };
  
  return (
    <div>
      <h1 style={{color:'grey'}}>Cat Info:</h1>
      <h2> 
        {" "}
        {capitalizeFirstLetter(cat.name)} is {cat.age} & {cat.description} 
      </h2>
      <h4 style={{color:'black'}}>{cat.hadFirstCheckUp ? "Has Had First Checkup" : "Has Not Yet Had First Checkup"}</h4>
      <a href="/cats">back</a>
    </div>
  );
}

export default Show;