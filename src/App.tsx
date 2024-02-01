import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Khost", "Kabul", "Herat", "Kandahar", "Ghazni"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
