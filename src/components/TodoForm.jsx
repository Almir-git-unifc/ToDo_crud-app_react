/* eslint-disable react/prop-types */
import { useState } from 'react';




const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Validation
    if (!value || !category) {
      console.log(
        'Valores nulos! Por favor, digite uma tarefa e escolha uma categoria!'
      );
      return;
    }

    // Clean fields
    setValue('');
    setCategory('');
    console.log(value, category);

    // Add Todo
    addTodo(value, category);
  };

  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Digite o título da tarefa'
          value={value}
          onChange={e => setValue(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>Selecione uma categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Estudos'>Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm
