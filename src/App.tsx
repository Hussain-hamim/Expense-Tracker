import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);

  function handleClick() {
    setCartItems([]);
  }

  return (
    <>
      <NavBar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClick}/>
    </>
  );
}

export default App;
