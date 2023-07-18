import { useState } from "react";

const LoggedIn = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <h2>{LoggedIn ? "Logged In" : "Logged Out"}</h2>
    </div>
  );
};

export default LoggedIn;
