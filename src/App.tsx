import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom "],
  });

  function handleClick() {
    setPizza({ ...pizza, topping: [...pizza.topping, "Cheese "] });
  }

  return (
    <>
      <div>{pizza.topping}</div>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default App;
