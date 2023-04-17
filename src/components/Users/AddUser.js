import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };
  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" placeholder="Enter the username" onChange={usernameChangedHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="Enter the age" onChange={ageChangeHandler}/>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
