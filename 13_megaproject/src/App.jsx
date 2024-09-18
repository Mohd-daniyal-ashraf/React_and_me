import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Header, Footer } from "./componants/index";
import "./App.css";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen text-red-500 flex flex-wrap content-between bg-gray-800">
      hivhdkf
      <div className="w-full block"></div>
      <Header />
      <main>{/* outlet */}</main>
      <Footer />
    </div>
  ) : null;
}

export default App;
