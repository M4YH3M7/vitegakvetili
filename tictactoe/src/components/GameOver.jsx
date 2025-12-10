export default function GameOver({ winner, onRestart }) 
{
  return (
    <div id="Games-over!">
      <h2>Game is Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <p><button onClick={onRestart}>rematch</button></p>
    </div>
  );
}