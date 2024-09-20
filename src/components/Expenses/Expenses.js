import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const expenseItems = [
    {
        id: "e1",
        title: "Car insurance",
        price: "$294.67",
        date: new Date(2021, 2, 28)
    },
    {
        id: "e2",
        title: "Cola",
        price: "$2.00",
        date: new Date(2021, 3, 28)
    },
    {
        id: "e3",
        title: "Painting",
        price: "$2000.00",
        date: new Date(2022, 2, 28)
    },
]

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {
                    expenseItems.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            price={expense.price}
                            date={expense.date}
                        />
                    ))
                }
            </Card>
        </div>
    );
};

export default Expenses;