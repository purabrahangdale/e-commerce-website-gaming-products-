import { useState } from "react";

import "./Auth.css";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleLogin(event) {

    event.preventDefault();

    console.log({
      email,
      password
    });

    alert("Login Successful");
  }

  return (
    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleLogin}
      >

        <h1>
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"

          value={email}

          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"

          value={password}

          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;