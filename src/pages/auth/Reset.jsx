import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "src/components/Loader";
import { auth } from "src/firebase/firebase.config";

export const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for reset password link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="customContainer flex justify-center items-center flex-auto flex-col h-full">
      {isLoading && <Loader />}
      <h1>Reset password</h1>
      <form className="flex flex-col" onSubmit={resetPassword}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset password</button>
      </form>
      <p>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
      </p>
    </div>
  );
};
