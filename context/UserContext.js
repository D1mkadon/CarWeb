import { createContext, useState, useEffect } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(null);

  const handleLogin = (user) => {
    setIsLogin(user);
  };
  const handleLogOut = () => {
    setIsLogin(null);
  };
  useEffect(() => {
    setUsersToState();
  }, []);

  const setUsersToState = () => {
    setUsers(
      localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : []
    );
  };

  const addUsers = async ({ login, name, password, email }) => {
    const userInfo = {
      login,
      name,
      password,
      email,
    };

    const newUsers = [...(users || []), userInfo];
    console.log(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsersToState();
  };

  return (
    <UsersContext.Provider
      value={{
        isLogin,
        handleLogin,
        handleLogOut,
        users,
        addUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
