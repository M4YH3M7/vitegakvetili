import { useState } from "react";

export default function Player({ name, symbol }) {
const [isEditing,setIsEditing] = useState(false)

function handleEditClick(){
  setIsEditing(true);
}

const playerName =<span className="player-name">{name}</span>

if(isEditing )
{
  playerName = <input type="tesxt" defaultValue={name}/>;
}
  return (
    <li className="player">
      {PlayerName}
      <span className="player-name">{name}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>Edit</button>
    </li>

    
  );
}
