import { useState } from "react";

function App() {
  const [tag, setTag] = useState(["happy", "boy"]);

  function handleClick() {
    //add
    setTag([...tag, "allhamdullah"]);
    //remove
    setTag(tag.filter((t) => t !== "boy"));
    //update
    setTag(tag.map((t) => (t === "happy" ? "Pleasant" : t)));
  }

  return (
    <>
      {tag.map((t) => (
        <p>{t}</p>
      ))}

      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
