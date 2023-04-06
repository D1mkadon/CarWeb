import { createContext, useState, useEffect } from "react";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

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

    const isUserExist = users?.usersA?.find(
      (element) => element.email === userInfo.email
    );

    let newUsers;

    if (isUserExist) {
      return;
    } else {
      newUsers = [...(users?.usersA || []), userInfo];
    }
    localStorage.setItem("users", JSON.stringify({ usersA: newUsers }));
    setUsersToState();
  };

  //   const deleteItemFromusers = (id) => {
  //     const newusersItems = users?.usersItems?.filter((i) => i.id !== id);

  //     localStorage.setItem("users", JSON.stringify({ usersItems: newusersItems }));
  //     setUsersToState();
  //   };

  return (
    <UsersContext.Provider
      value={{
        users,
        addUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
