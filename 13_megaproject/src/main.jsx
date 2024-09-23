import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <authProtected authauthentication={false}>
            <Login />
          </authProtected>
        ),
      },
      {
        path: "/signup",
        element: (
          <authProtected authauthentication={false}>
            <SignUp />
          </authProtected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <authProtected authauthentication>
            {" "}
            <AllPosts />
          </authProtected>
        ),
      },

      {
        path: "/add-post",
        element: (
          <authProtected authauthentication>
            {" "}
            <AddPost />
          </authProtected>
        ),
      },

      {
        path: "/edit-post/:slug",
        element: (
          <authProtected authauthentication>
            {" "}
            <EditPost />
          </authProtected>
        ),
      },

      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
