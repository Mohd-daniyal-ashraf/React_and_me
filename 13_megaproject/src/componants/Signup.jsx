import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    try {
      const userdata = await authService.login(data);
      if (userdata) {
        const userdata = authService.getCurrentuser();
        if (userdata) dispatch(login(userdata));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return <div>Signup</div>;
}

export default Signup;
