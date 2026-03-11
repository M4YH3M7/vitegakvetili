import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 4) {
      alert("Name must be at least 4 letters");
      return;
    }

    if (surname.length < 4) {
      alert("Surname must be at least 4 letters");
      return;
    }

    if (pass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Form submitted successfully");

    setName("");
    setSurname("");
    setAge("");
    setEmail("");
    setPass("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md w-[350px]"
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-md p-2 bg-gray-200"
        />

        <input
          type="text"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          placeholder="Enter your surname"
          className="border border-gray-300 rounded-md p-2 bg-gray-200"
        />

        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Enter your age"
          className="border border-gray-300 rounded-md p-2 bg-gray-200"
        />

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-2 bg-gray-200"
        />

        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2 bg-gray-200"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;