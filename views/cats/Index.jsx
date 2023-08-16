import React from "react";

function Index(props) {
  const cats= props.cats;
  return (
    <div>
      <nav>
        <a href="/cats/new">Create a New Cat</a>
      </nav>

      {cats.map((cat, i) => {
        return (
          <div key={i}>
            <a href={`/cats/${cat._id}`}>
              <h2>{cat.name}</h2>
              <h3>{cat.age}</h3>
            </a>

{/* {/* ------------------------- */}
<a href={`/cats/${cat._id}/edit`}>Edit This Cat</a>

{/* ------------------------- */} 



{/* ------------------------- */}
            <form action={`/cats/${cat._id}?_method=DELETE`} method="POST"  >
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
