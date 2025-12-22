import React, { useState } from "react";
import "./App.css";

function App() {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: "football", isFavorite: false }
  ]);
  const [newHobby, setNewHobby] = useState("");

  // Add a new hobby
  const addHobby = () => {
    if (newHobby.trim() === "") return;
    const newHobbyObj = {
      id: Date.now(),
      name: newHobby.trim(),
      isFavorite: false,
    };
    setHobbies([...hobbies, newHobbyObj]);
    setNewHobby("");
  };

  // Toggle favorite status
  const toggleFavorite = (id) => {
    const updatedHobbies = hobbies.map((hobby) => {
      if (hobby.id === id) {
        return { ...hobby, isFavorite: !hobby.isFavorite };
      }
      return hobby;
    });
    setHobbies(updatedHobbies);
  };

  // Filter favorite hobbies
  const favoriteHobbies = hobbies.filter((hobby) => hobby.isFavorite);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addHobby();
    }
  };

  return (
    <div className="app">
      <h1>My Hobbies</h1>
      
      <div className="hobby-form">
        <input
          type="text"
          placeholder="Enter a new hobby..."
          className="hobby-input"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="save-button" onClick={addHobby}>
          Save
        </button>
      </div>

      <div className="container">
        {/* All Hobbies Section */}
        <div className="hobby-section">
          <h2>All Hobbies</h2>
          {hobbies.length === 0 ? (
            <p className="no-hobbies">No hobbies added yet. Add your first hobby above!</p>
          ) : (
            <ul className="hobby-list">
              {hobbies.map((hobby) => (
                <li key={hobby.id} className={`hobby-item ${hobby.isFavorite ? 'favorite-item' : ''}`}>
                  <span className="hobby-name">
                    <strong>{hobby.name}</strong>
                  </span>
                  <button
                    className={`favorite-btn ${hobby.isFavorite ? 'favorited' : ''}`}
                    onClick={() => toggleFavorite(hobby.id)}
                    aria-label={hobby.isFavorite ? `Remove ${hobby.name} from favorites` : `Add ${hobby.name} to favorites`}
                  >
                    {hobby.isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Favorite Hobbies Section */}
        <div className="hobby-section">
          <h2>Favorite Hobbies</h2>
          {favoriteHobbies.length === 0 ? (
            <p className="no-favorites">
              No favorite hobbies yet. Mark some hobbies as favorites!
            </p>
          ) : (
            <ul className="hobby-list">
              {favoriteHobbies.map((hobby) => (
                <li key={hobby.id} className="hobby-item favorite">
                  <span className="hobby-name">
                    <strong>{hobby.name}</strong> <span className="heart-icon">❤️</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;