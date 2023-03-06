import React from "react";

export default function Login(){





    return (
        <div>
               
            <div>
            <h3>Account:</h3>
            <input type="text"></input>
            <h3>Password:</h3>
            <input type="text"></input>
            <button type= "submit">Submit</button> 
            <button type="submit">Sign Up</button>
          
            <p><a href="#" onClick={handleClick}> Forgot Password?</a></p>
           
            </div>
        </div>
    )
}