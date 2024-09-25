import React, { useState } from "react";
import Header from "./header";
import LoginCss from "../styles/login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/dost");
    }
  };

  return (
    <>
      <Header />
      <div className={LoginCss.loginContainerBox}>
        <h1 className={LoginCss.loginh1}>Login</h1>
        <form className={LoginCss.loginForm} onSubmit={handleSubmit}>
          <input
            className={LoginCss.loginInputs}
            type="text"
            placeholder="Username"
            required
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className={LoginCss.loginInputs}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <div className={LoginCss.showpassDiv}>
            <input
              className={LoginCss.loginCheckbox}
              type="checkbox"
              id="showpassword"
              name="showpasswordcb"
              onChange={handleShowPasswordChange}
            />
            <label for="showpasswordcb">Show password</label>
          </div>

          <div className={LoginCss.LoginButtons}>
            <button
              className={`${LoginCss.loginbtn} ${LoginCss.loginButtons}`}
              type="submit"
            >
              Login
            </button>

            <Link to="/register" className={LoginCss.loginLink}>
              <button
                className={`${LoginCss.loginRegisterbtn} ${LoginCss.loginButtons}`}
                type="button"
              >
                Register
              </button>
            </Link>
          </div>

          <a className={LoginCss.loginForgotpass} href="/forgetpass">
            Search by name
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
