import React from 'react'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();

    }
  return (
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id="username" type="text" placeholder='Enter the username'/>
        <label htmlFor='age'>Age</label>
        <input id="age" type="number" placeholder='Enter the age'/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddUser