import React,{useState} from "react";
import Button from "./Button";

export default function CreateAccount(){
const [email, setEmail] = useState('')
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

function handleSubmit(event){
    event.preventDefault();
    
    fetch('http://localhost:5000/api/data',{
        method: 'POST',
        headers:{'Content-Type': 'apllication/json'},
        body: JSON.stringify({email,userName,password})
    })
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .catch((error)=> console.error(error))
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    type="text"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <h3>Repeat Password:</h3>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <div>
                    <input type="checkbox" /><p>I accept the <a href="javascript:void(0)">AGB</a>.</p>
                </div>
                < Button type="submit" innerText={"Create Account"} />
            </form>
        </div>
    )
}