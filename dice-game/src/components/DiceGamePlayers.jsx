const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function DiceBasic({ title, dice, handleClick, isDisabled }) {
   let buttonStyle = isDisabled 
   ? {...baseStyle, ...disabledStyle}
   :{...baseStyle};
 
  const diceEmoi = index == null ? dieEmojis[0] : diceEmois[index - 1];
  
  if(isDisabled)
    {
      buttonStyle = {...baseStyle, ...disabledStyle}; 
    }
  
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ fontSize: "60px" }}>{diceEmojis[dice]}</div>
      <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
        Roll Dice
      </button>
    </div>
  );
}

const disabledStyle = {
  backgroundColor:"green",
  cursor:"not-allowed",
  opacity: 0.6,
}

const basestyle =
{
  magrin:"10px",
  padding: "15px 30px",
  borderRadius: "10px",
  backgroundColor: "cyan"
}
