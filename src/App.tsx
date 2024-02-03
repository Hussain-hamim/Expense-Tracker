import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import "./App.css";
function App() {
  // const [show, setShow] = useState(false);

  function handleClick() {
    // setShow(!show);
  }

  return (
    <>
      <ExpandableText maxChar={20}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        tempora corrupti nostrum id architecto illum blanditiis. Quibusdam quia
        recusandae doloremque iure voluptate aspernatur sunt ipsam vel, ex fuga
        ipsa obcaecati maxime pariatur dignissimos provident laborum vitae odit,
        veritatis eos dolores cum. Ab quibusdam eaque, deserunt vero dicta
        accusamus aspernatur tenetur.
      </ExpandableText>
    </>
  );
}

export default App;
