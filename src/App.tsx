import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Drawer from "./components/Drawer";


function App() {
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    setIsShow(!isShow);
  }

  return (
    <>
      {isShow && (
        <Alert onClose={() => setIsShow(false)}>
          This alert will be shown here
        </Alert>
      )}

      <Button handleClick={handleClick}>My Button</Button>
      <br />
      <ListGroup
        items={["khost", "kabul", "Herat"]}
        heading="My Cities"
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
      <br />
      <Drawer></Drawer>
    </>
  );
}

export default App;
