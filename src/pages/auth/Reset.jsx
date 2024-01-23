import React from "react";
import { Link } from "react-router-dom";

export const Reset = () => {
  return (
    <div className="customContainer flex justify-center items-center flex-auto flex-col h-full">
      <h1>Reset password</h1>
      <form className="flex flex-col">
        <input type="password" placeholder="password" required />
        <button type="submit">Reset password</button>
      </form>
      <p>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
      </p>
    </div>
  );
};
