import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return <p>No expenses found.</p>;

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;
