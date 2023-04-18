import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError]= useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid input',
            msg: 'Please enter valid username and age(non-empty values)'
        })
        return;
    }
    if(+enteredAge < 1){
        setError({
            title: 'Invalid age',
            msg: 'Please enter valid age(age > 0)'
        })
        return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const errorHandler = () => {
    setError(null);
  }
  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  return (
    <>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} msg={error.msg}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUsername} placeholder="Enter the username" onChange={usernameChangedHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} placeholder="Enter the age" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
