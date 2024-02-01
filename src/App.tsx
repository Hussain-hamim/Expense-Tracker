import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Khost", "Kabul", "Herat", "Kandahar", "Ghazni"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
