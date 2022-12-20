import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
  };
    
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
      return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">Username</lable>
        <input id="username" type="text" onChange={usernameChangeHandler}></input>
        <lable htmlFor="age">Age (Years)</lable>
        <input id="age" type="number"></input>
        <Button type="submit" onChange={ageChangeHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
