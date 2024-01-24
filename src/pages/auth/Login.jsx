import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "src/firebase/firebase.config";
import { toast } from "react-toastify";
import { Loader } from "src/components/Loader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login success");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="customContainer flex justify-center items-center flex-auto flex-col h-full">
      {isLoading && <Loader />}
      <h1>Logon</h1>
      <form className="flex flex-col" onSubmit={loginUser}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <Link to="/reset">Reset password</Link>
        <p className="text-center">-- or --</p>
      </form>
      <button onClick={signInWithGoogle}>
        Login with <span>Google</span>
      </button>
      <p>
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};
