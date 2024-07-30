//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import CategoryPosts from "./pages/CategoryPosts.tsx";
// import { AuthLayout } from "./components/index.js";
import AddPost from "./pages/AddPost.tsx";
import EditPost from "./pages/EditPost.tsx";
import Post from "./pages/Post.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import VerifyEmail from "./pages/VerifyEmail.tsx";
import NotFound from "./pages/NotFound.tsx";
import Author from "./pages/Author.tsx";
import MyPosts from "./pages/MyPosts.tsx";
import Account from "./pages/Account.tsx";
import Profile from "./pages/Profile.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {
      //  errorElement={<NotFound/>}
        <>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="author/:slug" element={<Author />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="edit-post/:slug" element={<EditPost />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="post/:slug" element={<Post />} />
          <Route path="profile" element={<Profile />} />
          <Route path="category/:slug" element={<CategoryPosts />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </>
      }
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
