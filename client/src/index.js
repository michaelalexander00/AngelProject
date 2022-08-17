// import ReactDOM from "react-dom";
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import SignIn from "./login/SignIn";
// import App from ./App
// function Index() {
//   return(
//   <Router>
//     <Routes>
//       <Route path="/sign-in" element={<SignIn />} />
//     </Routes>
//   </Router>
//   )
// }


function Index() {
  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<SignIn/>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

// import React from "react";
// import ReactDOM from "react-dom";
// import Home from "./components/Home";
// import SignUp from "./components/signup/SignUp";
// import SignIn from "./components/login/SignIn";
// import ForgotPassword from "./components/ForgotPassword";
// import DashBoard from "./components/DashBoard";
// import ManageEmployees from "./components/ManageEmployees";
// import EditMenu from "./components/EditMenu";
// import Testing from "./components/Testing";
// import Users from './APIs/Users'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./global.scss";
// import "./maxminwidth.scss";

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/sign-up" element={<SignUp />} />
//       <Route path="/sign-in" element={<SignIn />} />
//       <Route path="/testing" element={<Testing />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/:restaurantID/dashboard" element={<DashBoard />} />
//       <Route path="/:restaurantID/edit-menu/:location" element={<EditMenu />} />
//       <Route path="/:restaurantID/dashboard/employees" element={<ManageEmployees />} />
//       <Route path="/api/:restaurantID/users" element={<Users />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

