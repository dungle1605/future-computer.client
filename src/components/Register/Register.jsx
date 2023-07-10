import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form action="#">
        <div className="title">Login</div>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Retype Your Password" required />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue" />
        </div>
        <div>
          <span>
            Already have an account Register{" "}
            <Link to="/login" className="link">
              Here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
