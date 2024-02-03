import { useState } from "react";

function App() {
  const [games, setGames] = useState({
    id: 1,
    player: { name: "Hamim" },
  });

  function handleClick() {
    setGames({ ...games, player: { ...games.player, name: "Hussain" } });
  }

  return (
    <>
      <div>{games.player.name}</div>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default App;
