import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Hussain",
    address: {
      city: "khost",
      zip: 1025,
    },
  });

  function handleClick() {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "kabul" },
    });
  }

  return (
    <>
      {customer.address.city}
      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
