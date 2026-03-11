import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(name.length < 4);
    setSurnameError(surname.length < 4);
    setPassError(pass.length < 6);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-60">

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        className={`border p-2 ${nameError ? "border-red-500 bg-red-100" : "border-gray-300"}`}
      />

      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="surname"
        className={`border p-2 ${surnameError ? "border-red-500 bg-red-100" : "border-gray-300"}`}
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        className="border p-2 border-gray-300"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="border p-2 border-gray-300"
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
        className={`border p-2 ${passError ? "border-red-500 bg-red-100" : "border-gray-300"}`}
      />

      <button className="bg-blue-500 text-white p-2">
        submit
      </button>

    </form>
  );
}

export default App;