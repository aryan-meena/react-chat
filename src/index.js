import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import MainLayout from "./layouts/main_layout";
import LoginLayout from "./layouts/login_layout";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/login/Sign-in";
import SignUp from "./pages/login/Sign-up";
import Chat from "./pages/chat/Chat";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/user/sign-in" />} />
      <Route path="/user" element={<LoginLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="/admin" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
