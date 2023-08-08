import React from "react";
import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

function ExpenseItems(props) {

    const  [amountX , setAmountX] = useState(props.amount);
    const [title , setTitle] =  useState(props.title);
        const clickHandler = () => {
                setAmountX(999)
            console.log(amountX);
        }

         function clickHandlerX () {
            setTitle("Roshan")   
        }

    return(
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div className="expense-item__description"><h2>{title}</h2>
        <button onClick={clickHandlerX} > Reset</button>
        <div className="expense-item__price">${amountX }</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
}

export default ExpenseItems;