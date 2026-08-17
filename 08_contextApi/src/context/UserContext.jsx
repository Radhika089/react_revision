import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <UserContext value={user}>{children}</UserContext>;
};

export const useAuth = () => useContext(UserContext);

export default UserProvider;
