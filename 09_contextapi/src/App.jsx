import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/userContextProvider";
import Profile from "./componant/profile";
import Login from "./componant/login";

function App() {

  return (
    <>
      <UserContextProvider>
        {/* Now every componant we will define inside this UserContextProvider will have the
        access of values user ans setUser */}
        <h1>THis is context api</h1>
        <Login/>
        <br /><br />
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
