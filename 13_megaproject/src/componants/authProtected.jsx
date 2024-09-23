import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function authProtected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authstatus = useSelector((state) => state.authstatus);
  useEffect(() => {
    if (authentication && authstatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authstatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authstatus, authentication, navigate]);
  return loader ? <h1>Loading...</h1> : <div>{children}</div>;
}

export default authProtected;
