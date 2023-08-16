import React from "react";

function Index(props) {
  const dogs= props.dogs;
  return (
    <div>
      <nav>
        <a href="/dogs/new">Create a New Dog</a>
      </nav>

      {dogs.map((dog, i) => {
        return (
          <div key={i}>
            <a href={`/dogs/${dog._id}`}>
              <h2>{dog.name}</h2>
              <h3>{dog.breed}</h3>
            </a>

{/* {/* ------------------------- */}
<a href={`/dogs/${dog._id}/edit`}>Edit This Dog</a>

{/* ------------------------- */} 



{/* ------------------------- */}
            <form action={`/dogs/${dog._id}?_method=DELETE`} method="POST"  >
            <input type="submit" value="DELETE"/>

            </form>
{/* ------------------------- */}
          </div>
        );
      })}
      <a href="/">home</a>
    </div>
  );
}

export default Index;
