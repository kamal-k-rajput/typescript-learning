import { useState } from "react";
import "./login.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server or validate
    console.log("Username:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button-primary default w-button">
          Login
        </button>
      </form>
    </>
  );
};
