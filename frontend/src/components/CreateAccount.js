import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");

      return;
    }
    if(userName.length <= 3){
        alert('Please enter a username with at lest 3 characters')
        return;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, have at least one uppercase letter, one  number and one special character. ");
      return;
    }

    if(password !== repeatPassword){
        alert('Passwords do not match');
        return;
    }



    fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, userName, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  function handlePasswordShow(){
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <form id="create-account-form" onSubmit={handleSubmit}>
        <h2> Create a new Account</h2>
        <h3>Email:</h3>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <h3>Username:</h3>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <h3>Password:</h3>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="button" onClick={handlePasswordShow}>{showPassword ? "Hide" :"Show"}</button>
        <h3>Repeat Password:</h3>
        <input
          type={showPassword ? "text" : "password"}
          id="repeatPassword"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
          >
          </input>
          <button type="button" onClick={handlePasswordShow}>{showPassword ? "Hide" :"Show"}</button>
        <div>
          <input type="checkbox" />
          <p>
            I accept the <Link to="/AGB">AGB</Link>{" "}
          </p>
        </div>
        <Button type="submit" innerText={"Create Account"} />
      </form>
    </div>
  );
}
