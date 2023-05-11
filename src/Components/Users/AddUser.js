import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const validateInputData = (enteredInput, setError) => {
  if (enteredInput.username === "" || enteredInput.age === "") {
    setError((prev) => {
      return {
        ...prev,
        title: "Enter Valid Input",
        message: "Fields cannot be empty",
        isError: true,
      };
    });
    return false;
  }
  if (+enteredInput.age < 1) {
    setError((prev) => {
      return {
        ...prev,
        title: "Invalid Input for age ",
        message: "Age field cannot be less than 1",
        isError: true,
      };
    });

    return false;
  }

  return true;
};

const AddUser = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    username: "",
    age: "",
  });
  const [Error, setError] = useState({
    title: "",
    message: "",
    isError: false,
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    const isValid = validateInputData(enteredInput, setError);
    if (isValid) {
      setEnteredInput((prev) => {
        return {
          ...prev,
          username: "",
          age: "",
        };
      });
      props.onAdd(enteredInput);
    }
  };

  const handleOnChangeName = ({ target }) => {
    setEnteredInput((prev) => {
      return {
        ...prev,
        username: target.value,
      };
    });
  };

  const handleOnChangeAge = ({ target }) => {
    setEnteredInput((prev) => {
      return {
        ...prev,
        age: target.value,
      };
    });
  };

  const closeErrorModal = () => {
    setError((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return (
    <div>
      {Error.isError && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onClick={closeErrorModal}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={handleOnChangeName}
            value={enteredInput.username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={handleOnChangeAge}
            value={enteredInput.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
