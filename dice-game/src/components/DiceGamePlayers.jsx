const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function Player({ title, index, handleClick, isDisabled }) {
  const buttonStyle = isDisabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle };

  const diceEmoji = index === null ? diceEmojis[0] : diceEmojis[index - 1];

  return (
    <>
      <div>
        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        <div style={{ fontSize: "80px" }}>{diceEmoji}</div>
        <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
          Roll Dice
        </button>
      </div>
    </>
  );
}

const disabledStyle = {
  backgroundColor: "#9e9e9e",
  cursor: "not-allowed",
  opacity: 0.6,
};

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#4677ffff",
  color: "white",
  border: "none",
};