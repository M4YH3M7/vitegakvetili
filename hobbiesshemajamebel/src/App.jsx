import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";


function App() {
  const [hobbies, setHobbies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addHobby() {
    if (inputValue.trim() === "") return;

    const newHobby = {
      id: nanoid(),
      name: inputValue.trim(),
      isFavorite: false,
    };

    setHobbies([...hobbies, newHobby]);
    setInputValue("");
  }

  function toggleFavorite(id) {
    setHobbies(
      hobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, isFavorite: !hobby.isFavorite } : hobby
      )
    );
  }
  const favoriteHobbies = hobbies.filter((hobby) => hobby.isFavorite);

  return (
    <div className="app">
      <h1>MY HOBBIES</h1>
      <div className="hobby-form">
        <input
          type="text"
          placeholder="Enter a new hobby..."
          className="hobby-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addHobby()}
        />
        <button className="save-button" onClick={addHobby}>
          Save
        </button>
      </div>

      <div className="container">
        <div className="hobby-list">
          <h2>All Hobbies</h2>
          {hobbies.length === 0 ? (
            <div className="empty-state">
              <p>No hobbies yet.</p>
            </div>
          ) : (
            hobbies.map((hobby) => (
              <div
                key={hobby.id}
                className={`hobby-item ${hobby.isFavorite ? "favorite" : ""}`}
              >
                <span className="hobby-name">{hobby.name}</span>
                <button
                  className={`favorite-button ${
                    hobby.isFavorite ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(hobby.id)}
                >
                  {hobby.isFavorite ? "★" : "☆"}
                </button>
              </div>
            ))
          )}
        </div>

        <div className="favorite-hobbies">
          <h2>⭐ Favorite Hobbies</h2>
          {favoriteHobbies.length === 0 ? (
            <div className="empty-state">
              <p>No favorite hobbies yet</p>
            </div>
          ) : (
            favoriteHobbies.map((hobby) => (
              <div key={hobby.id} className="hobby-item favorite">
                <span className="hobby-name">{hobby.name}</span>
                <button
                  className="favorite-button favorited"
                  onClick={() => toggleFavorite(hobby.id)}
                >
                  ★
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;