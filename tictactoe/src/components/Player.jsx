// Player.jsx
import { useState } from "react";

export default function Player({
  currentPlayer, // შეიძლება არ გამოიყენო, მაგრამ ნახე App.jsx-ის მაგალითი
  initialName,
  symbol,
  isActive, // წაუვლი App-დან: isActive = currentPlayer === symbol
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((prevValue) => !prevValue);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={`player-item ${isActive ? "active" : ""}`}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        {isActive && <span className="current-badge"> ← Current</span>}
      </span>
    </li>
  );
}
