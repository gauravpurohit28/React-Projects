const ExpenseItem = ({ expense, onDelete }) => {
  const { id, title, amount, category, date } = expense;

  return (
    <div className="flex justify-between items-center border p-2 rounded mb-2">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>₹{amount} | {category} | {new Date(date).toLocaleDateString()}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
