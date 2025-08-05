import AddExpenseForm from './components/AddExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {

  const [expenses, setExpenses] = useState();

  const handleAddExpense = (expense) => {
    const arr = expenses?.length>0 ? [...expenses]:[expense]
    console.log(expenses);
    

    setExpenses(arr);
    
    
  };

   return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expense = {expenses}/>
      
    </div>
  );
}

export default App;
