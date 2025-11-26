import Player from "./components/Player";

export default function App() {

  const players = [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" }
  ];

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((p) => (
            <Player key={p.symbol} name={p.name} symbol={p.symbol} />
          ))}
        </ol>
      </div>
    </main>
  );
}
