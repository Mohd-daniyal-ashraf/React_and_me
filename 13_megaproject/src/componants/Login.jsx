import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    try {
      const session = await authService.authService.login(data);
      if (session) {
        const userdata = authService.getCurrentuser();
        if (userdata) dispacth(authLogin(userdata));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
