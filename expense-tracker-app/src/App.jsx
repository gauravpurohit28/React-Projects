import AddExpenseForm from './components/AddExpenseForm';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mb-6">Expense Tracker</h1>
      <AddExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expense={expenses} />
    </div>
  );
}

export default App;
