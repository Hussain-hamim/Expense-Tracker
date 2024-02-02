import { WiMoonNew } from "react-icons/wi";

import { WiMoonFull } from "react-icons/wi";
import "./App.css";
import { useState } from "react";

interface props {
  onClick: () => void;
}

function App({ onClick }: props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <WiMoonFull size="50" onClick={toggle} />;
  return <WiMoonNew size="50" onClick={toggle} />;
}

export default App;
