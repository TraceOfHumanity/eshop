import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="customContainer flex justify-center items-center flex-auto flex-col h-full">
      <h1>Logon</h1>
      <form className="flex flex-col">
        <input type="text" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
        <Link to="/reset">Reset password</Link>
        <p className="text-center">-- or --</p>
      </form>
      <button>
        Login with <span>Google</span>
      </button>
      <p>
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};
