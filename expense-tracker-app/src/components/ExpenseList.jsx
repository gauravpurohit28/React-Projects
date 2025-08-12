const ExpenseList = ({ expense }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {expense && expense.length > 0 ? (
        expense.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-lg shadow-md px-4 py-3 flex justify-between items-center border border-gray-200"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">{item.title}</span>
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
            <div className="text-right text-green-600 font-medium text-md">
              ₹{item.amount}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No expenses to show.</p>
      )}
    </div>
  );
};

export default ExpenseList;
