import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.velue };
        });
    };

    const amountChangeHander = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    }

    const dateChangeHander = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHander} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31"  onChange={dateChangeHander}/>
        </div>
          </div>
          <div className="new-expense__actions">
              <button type="submit">add Expense</button>
          </div>
    </form>
  );
};

export default ExpenseForm;
