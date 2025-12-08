export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((gameTurns, index) => (
        <li key={index}>
          {turn.symbol} selected {gameTurns.square.row},  {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
