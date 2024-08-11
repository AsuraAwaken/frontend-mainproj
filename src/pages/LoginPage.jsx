import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import "./AdminPage";
import "./UserPage1";
import "./UserPage2";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //state managment
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/users?password=${password}`
      );

      const data = response.data;
      console.log(data);
      if (data.length === 0) {
        alert("Invalid User");
      } else if (data[0].email === "king@gmail.com") {
        navigate("/admin");
      } else if (data[0].email === "soap@gmail.com") {
        navigate("/user1");
      } else if (data[0].email === "ghost@gmail.com") {
        navigate("/user2");
      }
    } catch (err) {}
  };

  return (
    <>
      <div className="login">
        <h2 className="login-log">Login NGO</h2>
        <br />
        <form className="label" onSubmit={handleLogin}>
          <div className="login-container">
            <label>Login Id:</label>
            <input
              type="text"
              placeholder="Enter your Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label>PassWord:</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
