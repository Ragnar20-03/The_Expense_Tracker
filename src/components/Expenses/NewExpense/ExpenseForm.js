import React, { useCallback, useState } from "react"
import './NewExpense.css'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //    const [userInput , setUserInput] =  useState({
    //         enteredTitle :'' ,
    //         eneterdAmount : '',
    //         enteredDate : ''
    //     })

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    //     // setUserInput((prevstate) => {
    //     //     return {...prevstate , enteredTitle:event.target.value}
    //     // })
    // }
    // const amountChangeHandler = (event) => {
    //     // setUserInput((prevstate) => {
    //     //     return {...prevstate , eneterdAmount:event.target.value}
    //     // })

    //     setEnteredAmount(event.target.value);

    // }
    // const dateChangeHandler = (event) => {
    //     // setUserInput((prevstate) => {
    //         // return {...prevstate , enteredDate:event.target.value}
    //     // })

    //     setEnteredDate(event.target.value);

    // }

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        }
        else if (identifier === 'amount') {
            setEnteredAmount(value);
        }
        else {
            setEnteredDate(value)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle, amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" 
                            value={enteredTitle}
                    onChange={(event) => { inputChangeHandler('title', event.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" 
                    
                    value={enteredAmount}
                    onChange={(event) => { inputChangeHandler('amount', event.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2003-01-01" max="2022 - 12 - 31" 
                    value={enteredDate}
                    onChange={(event) => {inputChangeHandler ('date' , event.target.value)}}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm