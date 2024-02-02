import { useState } from "react";
import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  function handleClick() {
    setBugs(
      // bugs.map((bug) => (bug.id === 1 ? { ...bug, title: "Buggy 1" } : bug))
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  }

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "new"}
        </p>
      ))}

      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
