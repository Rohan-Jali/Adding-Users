import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  const [inputDataList, setInputDataList] = useState([]);

  const handleNewUserData = (newUserData) => {
    setInputDataList((prev) => {
      const mondifiedUserData = {
        ...newUserData,
        id: Math.random().toString(),
      };
      return [...prev, mondifiedUserData];
    });
  };

  return (
    <div>
      <AddUser onAdd={handleNewUserData} />
      <UserList userData={inputDataList} />
    </div>
  );
};

export default App;
