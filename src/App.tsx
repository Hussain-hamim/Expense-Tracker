import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
    </>
  );
}

export default App;
