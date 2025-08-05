

const ExpenseList = ({ expense }) => {

  return (
    <div>
      {expense && expense.map((item,index)=>
        <div>
          {item.title}
          {item.amount}
          {item.category}
        </div>

      )};
    </div>
    
  );
};

export default ExpenseList;
