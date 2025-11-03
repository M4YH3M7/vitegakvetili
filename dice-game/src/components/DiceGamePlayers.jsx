export default function DiceBasic({ title, dice, handleClick, isDisabled }) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ fontSize: "60px" }}>{diceEmojis[dice]}</div>
      <button onClick={handleClick} disabled={isDisabled}>
        Roll Dice
      </button>
    </div>
  );
}
