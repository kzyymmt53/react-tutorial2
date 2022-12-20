import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length == 0 || enteredAge.trim().length == 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">Username</lable>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
        <lable htmlFor="age">Age (Years)</lable>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
        <Button type="submit" >
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
