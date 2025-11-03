export default function DiceBasic({title, dice, handeClick, isDisabled }) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return(
      <><div>
            <h3>{title}</h3>
            <div style={{fontSize: "60px"}}>{diceEmois[dice]}</div>
            <p>1</p>
          
          <button onClick={handleClick}disabled ={isDisabled}>Roll Dice</button>
          
          </div>
      
      </>
         
    )
}