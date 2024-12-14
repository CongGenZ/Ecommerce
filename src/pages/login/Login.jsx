import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="" id="" placeholder="Usernam" />
          </div>
          <div className="input-box">
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className="remember-forgot">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember Me
            </label>
            <a href="/#">Forget Passsword</a>
            
          </div>
          <button type="submit">Login</button>
            <div className="register-link">
              <p>
                dont't have an account? <a href="/register">Register</a>
              </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
