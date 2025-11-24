import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [notes, setNoteList] = useState([]);


  const presetNotes = [
    { id: nanoid(), text: "ქარის ფონზე ვგრძნობთ თავისუფლებას" },
    { id: nanoid(), text: "სიჩუმეში ფიქრები უფრო ნათლად ისმის" },
    { id: nanoid(), text: "გზისპირა ნათურები ჩვენს ნაბიჯებს ემშვიდობება" },
    { id: nanoid(), text: "ყოველი ახალი დღე პატარა თავგადასავლით იწყება" },
    { id: nanoid(), text: "ღამის ბინდში ოცნებები უფრო ახლოს მოდის" },
    { id: nanoid(), text: "ვნატრობთ სიმშვიდეს, მაგრამ ვეძებთ თავგადასავალს" },
    { id: nanoid(), text: "იქ, სადაც სინათლე ჩნდება, გზა ყოველთვის გრძელდება" },
  ];

  const addNote = (text) => {
    const newNote = { id: nanoid(), text };

    setNoteList([...notes, newNote]);
  };


  const deleteNote = (id) => {
    setNoteList(notes.filter((item) => item.id !== id));
  };

  return (
    <div className="Start">
      <h1>Todo List</h1>

      <div className="todo-list">
        {notes.length === 0 && <div className="empty">list is empty</div>}

        {notes.length > 0 && (
          <>
            {notes.map((task) => (
              <div className="item" key={task.id}>
                <p>{task.text}</p>
                <button className="delete-btn" onClick={() => deleteNote(task.id)}>
                  წაშლა
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="buttons">
        <h2>catsn1</h2>

        <div className="container">
          {presetNotes.map((entry) => (
            <button
              key={entry.id}
              className="preset-button"
              onClick={() => addNote(entry.text)}
            >
              {entry.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
