import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Worked");
        } else {
          setError("invalid username or password");
          console.log("not found");
          console.log(response);
        }
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Username:</h3>
        <input
          className="logInInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h3>Password:</h3>
        <input
          className="logInInput"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
