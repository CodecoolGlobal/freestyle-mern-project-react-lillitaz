import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (userName.length <= 3) {
      alert("Please enter a username with at lest 3 characters");
      return;
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, have at least one uppercase letter, one  number and one special character. "
      );
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, userName, password }),
    })
      .then((response) => response.json())
      .then((data) =>
        console.log(data))
      .catch((error) => console.error(error));
  }

  function handlePasswordShow() {
    setShowPassword(!showPassword);
  }

  return (
    <div class="flex" id="registration-form">
      <div class="flex bg-white">
        <div class="w-full px- md:px-3 lg:px-0">
          <form
            onSubmit={handleSubmit}
            action={"http://127.0.0.1:3000/account"}

            class="bg-white rounded-md shadow-2xl p-5">
            <h1 class="text-gray-800 font-bold text-5xl mb-1">Hello!</h1>
            <p class="text-sm font-normal text-gray-600 text-3xl mb-12">Register here and collect your favorite movies...</p>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-1xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                class=" pl-2 w-full outline-none border-none"
                placeholder="Username" />
            </div>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-1xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                class=" pl-2 w-full outline-none border-none"
                placeholder="Email" />
            </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-1xl ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                class="pl-2 w-full outline-none border-none"
                placeholder="Set a Password" />
              <button type="button" onClick={handlePasswordShow}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-1xl ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                id="repeat-password"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
                required
                class="pl-2 w-full outline-none border-none"
                placeholder="Repeat Password" />
              <button type="button" onClick={handlePasswordShow}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div>
              <input type="checkbox" />
              <p>
                I accept the <Link to="/AGB">AGB</Link>{" "}
              </p>
            </div>
              <Button
                type="submit"
                class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              innerText={"Register"}
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
}

