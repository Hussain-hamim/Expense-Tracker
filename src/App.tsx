import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 2 },
      { id: 2, title: "product 2", quantity: 2 },
    ],
  });

  function handleClick() {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 3 } : item
      ),
    });
  }

  return (
    <>
      <div>
        {cart.items.map((item) =>
          item.id === 1 ? <p key={item.id}>{item.quantity}</p> : ""
        )}
      </div>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default App;
