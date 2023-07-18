import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // type assertion
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogIn = () => {
    setUser({
      name: "Parus",
      email: "Parus@example.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {user && (
        <h2>
          {user?.name} - {user?.email}
        </h2>
      )}
    </div>
  );
};

export default User;
