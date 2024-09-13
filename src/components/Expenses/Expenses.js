import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem.js"
import './Expenses.css'

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

function Expenses() {
    return (
        <Card className="expenses">
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
    )
}

export default Expenses