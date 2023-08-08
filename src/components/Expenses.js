import React from "react";
import './Expenses.css';
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";

function Expenses(data) {
    return (
        <Card className="expenses">
            <ExpenseItems 
                title = {data.items[0].title} 
                amount = {data.items[0].amount} 
                date = {data.items[0].date} 
            />

            <ExpenseItems 
                title = {data.items[1].title} 
                amount = {data.items[1].amount} 
                date = {data.items[1].date} 
            />

            <ExpenseItems 
                title = {data.items[2].title} 
                amount = {data.items[2].amount} 
                date = {data.items[2].date} 
            />    

        </Card>
    )
}

export default Expenses