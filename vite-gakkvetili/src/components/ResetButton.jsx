export default function ResetButton({title, handleReset}) {
    return (

        <button
      style={{
      marginLeft: "10px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}

    onClick={handleReset}
     >
       {title}
     </button>
    )

}