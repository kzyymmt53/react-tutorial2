import React from 'react';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <lable htmlFor="username">Username</lable>
            <input id="username" type="text"></input>
            <lable htmlFor="age">Age (Years)</lable>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    );
 };

export default AddUser;