import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br /><br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br /><br />
      <button onClick={handlesubmit}>Submit</button>
    </>
  );
}

export default Login;
