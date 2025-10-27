export default function CounterButtons({title, handleClick}) 
{
  return (
     <button 

    style=
    {{
      marginLeft: "19px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "7px",
      cursor: "pointer"
    }}

     onClick={handleClick}>
        
        {title}
     
     </button>
  )
}