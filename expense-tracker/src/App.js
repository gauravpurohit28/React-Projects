import AddExpenseForm from './components/AddExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expenses]);
    console.log(expense);
    
  };

   return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm onAdd={handleAddExpense} />
      <ExpenseItem/>
      <ExpenseList/>
      
    </div>
  );
}

export default App;
