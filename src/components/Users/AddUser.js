import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" placeholder="Enter the username" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="Enter the age" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
