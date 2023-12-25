import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [value, setValue] = useState(''); 

    const handleChange = (e) => {
        setValue(e.target.value); 
    }

    const handleSubmit = () => {
        e.preventDefault();
         addTodo(value);
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" 
      className='todo-input py-3 rounded-l-md' 
      placeholder='whats the task today'
      onChange={handleChange}
      />
      <button type='submit' className='todo-btn bg-purple-600 px-4 py-3 rounded-r-md'>Add</button>
    </form>
  )
}

export default TodoForm
