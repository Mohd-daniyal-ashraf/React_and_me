import React from "react";
import { Container, Logo, Logoutbtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const naItems = [
    {
      name: "Home",
      slud: "/",
      active: true,
    },
    {
      name: "Login",
      slud: "/login",
      active: !authStatus,
    },
    {
      name: "Singup",
      slud: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slud: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slud: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <div className="py-3 shadow gb-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {naItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate}>{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
