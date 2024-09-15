import React from "react";
import "../../App.css";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Create an Account</h1>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <p className="signup-footer">
          Already have an account? <a href="/">Log in</a>
        </p>
      </form>
    </div>
  );
}
