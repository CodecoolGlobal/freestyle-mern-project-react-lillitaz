import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div id="login" className="">
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
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="button" onClick={handleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
