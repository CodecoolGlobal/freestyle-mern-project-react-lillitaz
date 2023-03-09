import React, { useState } from "react";

export default function Login({ onLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          onLogin(username, password);
        } else {
          console.log("Error");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      {error && <div>{error}</div>}
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}