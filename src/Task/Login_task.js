import React from "react";
import { useState } from "react";

const Login_task = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin=()=> {
    if (username !== "" && password !== "") {
      setLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  }
  return (
    <div>
      <center>
      <h1>Login</h1>
      <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/><br/><br/>
      <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/><br/><br/> <button onClick={handleLogin}> Login </button>
      {loggedIn && <h2>Welcome, {username}!</h2>} 
      </center>
    </div>
  );
};

export default Login_task;
