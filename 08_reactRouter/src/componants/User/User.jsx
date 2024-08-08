import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const {id} = useParams();
  return (
    <>
      <h1 className="text-center text-3xl  font-semibold my-16"> Hello, {id}</h1>
    </>
  );
}
export default User;
