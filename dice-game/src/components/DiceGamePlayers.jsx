export default function DiceBasic({title, dice}) {
    return(
         <div>
            <h3>{title}</h3>
            <div style={{fontSize: "60px"}}>{dice}</div>
            <p>1</p>
          </div>
    )
}