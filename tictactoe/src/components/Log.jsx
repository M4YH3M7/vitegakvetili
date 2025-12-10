export default function Logs({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={index}>
          {turn.player} selected {turn.square.rowIndex}, {turn.square.colIndex}
        </li>
      ))}
    </ol>
  );
}