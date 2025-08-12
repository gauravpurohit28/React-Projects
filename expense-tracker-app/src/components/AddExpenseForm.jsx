import React, { useState } from 'react'

const AddExpenseForm = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date , setDate] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };

    onAdd(newExpense);

    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    
    <div className='flex justify-center'>
    
    <form>
    <input 
    type='text'
    placeholder='Title'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    required
    />
    <input 
    type='number'
    placeholder='Amount'
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
    required
    />
    <input 
    type='text'
    placeholder='Category'
    value={category}
    onChange={(e)=>setCategory(e.target.value)}
    required
    />
    <input 
    type='date'
    placeholder='date'
    value={date}
    onChange={(e)=>setDate(e.target.value)}
    required
    />
    <button onClick={handleSubmit}>Add Expense</button>
    </form>
    </div>
  )
}

export default AddExpenseForm;