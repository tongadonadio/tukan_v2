import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const addUser = (user) => {};

  const getUser = () => {};

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        addUser: addUser,
        getUser: getUser,
        updateUser: updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    console.log("UserProvider is not defined");
  }
  return context;
};
