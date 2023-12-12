import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AllRouter from "../Component/AllRouter";

function Login() {
  return (
    <Router>
      <div style={{marginLeft:"29.7vw"}} className="container ">
        <div className="SIGNIN">
          <Link to="/Signin">SIGN IN</Link>
        </div>
        <div className="SIGNUP">
          <Link to="/Signup">SING UP</Link>
        </div>
      </div>
      <AllRouter/>
    </Router>
  );
}

export default Login;