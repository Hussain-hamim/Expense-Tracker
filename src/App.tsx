import "./App.css";
import Alert from "./components/Alert";
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
      <Alert>
        Hello <b>World</b>
      </Alert>
    </>
  );
}

export default App;
