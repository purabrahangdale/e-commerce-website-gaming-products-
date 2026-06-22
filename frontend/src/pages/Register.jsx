import { useState } from "react";

import "./Auth.css";

function Register() {

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleRegister(event) {

    event.preventDefault();

    console.log({
      username,
      email,
      password
    });

    alert("Registration Successful");
  }

  return (
    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleRegister}
      >

        <h1>
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Username"

          value={username}

          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

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
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;