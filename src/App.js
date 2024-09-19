import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const addExpenseHandler = expense => {
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
