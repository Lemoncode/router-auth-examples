import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../core";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const { setUserInfo } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Just a mock / dummy password check
    if (username === "admin" && password === "test") {
      setUserInfo(username); // That's the important part
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div className="log-form">
      <h3>Login page, user: admin password: test</h3>
      <form onSubmit={handleNavigation}>
        <input
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};
