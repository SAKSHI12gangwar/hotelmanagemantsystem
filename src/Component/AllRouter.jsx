import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Mainfile from "./MainFile";
import Signin from "./SignIn";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Main" element={<Mainfile/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;