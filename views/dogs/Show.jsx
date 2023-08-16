import React from "react";

function Show(props) {
  const id = props.id
  const dog = props.dog;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  };
  
  return (
    <div>
      <h1 style={{color:'grey'}}>Dog Info:</h1>
      <h2> 
        {" "}
        {capitalizeFirstLetter(dog.name)} is a {dog.description} {dog.breed}
      </h2>
      <h4 style={{color:'black'}}>Age: {dog.age}</h4>
      <a href="/dogs">back</a>
    </div>
  );
}

export default Show;