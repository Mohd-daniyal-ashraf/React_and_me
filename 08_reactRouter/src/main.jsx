import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import App from "./App.jsx";
import "./index.css";
import Home from "./componants/home/home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from "./componants/About/About.jsx";
import Contact from "./componants/Contact/Contact.jsx";
import User from "./componants/User/User.jsx";
import Github, { githubinfo } from "./componants/Github/Github.jsx";
import Hello from "./componants/Hello/Hello.jsx";


// 1 - way to render
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// 2 - way to render
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />}>
        <Route path="hello" element={<Hello />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      <Route loader={githubinfo} path="/github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
