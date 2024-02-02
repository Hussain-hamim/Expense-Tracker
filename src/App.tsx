import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  function handleClick() {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, title: "Buggy 1" } : bug))
    );
  }

  return (
    <>
      {bugs.map((bug) => (
        <p>{bug.title}</p>
      ))}

      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
