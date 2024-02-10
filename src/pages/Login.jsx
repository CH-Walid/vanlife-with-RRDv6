import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setLoginFormData(prev => ({...prev, [name]: value}))
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
