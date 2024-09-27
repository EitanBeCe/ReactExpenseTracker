import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
      id: "e1",
      title: "Car insurance",
      price: 294.67,
      date: new Date(2024, 2, 28)
  },
  {
      id: "e2",
      title: "Cola",
      price: 500.00,
      date: new Date(2024, 3, 28)
  },
  {
      id: "e3",
      title: "Painting",
      price: 2000.00,
      date: new Date(2024, 2, 28)
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = newExpense => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseItems={expenses}/>
    </div>
  );
}

export default App;
