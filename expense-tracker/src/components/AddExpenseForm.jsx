import React, { useEffect, useState } from 'react'

const AddExpenseForm = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [date , setDate] = useState('')

    const handlesubmit

  return (
    <div>
    <h1>Add Expense Here!</h1>
    <form>
    <input 
    type='text'
    placeholder='Title'
    value={title}
    required
    />
    <input 
    type='number'
    placeholder='Amount'
    value={amount}
    required
    />
    <input 
    type='text'
    placeholder='Category'
    value={category}
    required
    />
    <input 
    type='date'
    placeholder='date'
    value={date}
    required
    />
    </form>
    </div>
  )
}

export default AddExpenseForm