import React from "react";
import ReactDOM from "react-dom";
// import Home from "./components/Home";
// import SignUp from "./components/signup/SignUp";
import SignIn from "./login/SignIn";
// import ForgotPassword from "./components/ForgotPassword";
// import DashBoard from "./components/DashBoard";
// import ManageEmployees from "./components/ManageEmployees";
// import EditMenu from "./components/EditMenu";
// import Testing from "./components/Testing";
// import Users from './APIs/Users'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./global.scss";
// import "./maxminwidth.scss";

function App() {
    return (
  <Router>
    <Routes>
      <Route path="/sign-in" Element={<SignIn />} />
    </Routes>
  </Router>);
}

export default App;