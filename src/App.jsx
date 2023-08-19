import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

import './App.css';

function App () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidades X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);


  const [search, setSearch] = useState("");


  const addTodo = (text, category) => {
    /* Vamos adicionar o array de objetos todo, em um novo Todo */
    /* newTodos é um array[], com spread dos arrays atuais [...todos] + novo todo '',{}'' que criaremos agora */
    /* text: que vira do formulário */
    /* category: que virá do formulário *-******************* */
     /* isCompleted: todos iniciam falso ************* */
    const newTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        text,                                   
        category,                                
        isCompleted: false,
      },
    ];

    /* Vamos atualizar o estado dos ToDos que estão sendo controlado no react */
    /* Vamos passar a variavel newTodos para a memória principal */
    setTodos(newTodos);
  };

    /* criamos acima variável  com todos os Todos, e* /
    /* Colocamos filtro nela; mas filter não muda o original, então precisa nova variável */
    /* Procurar id diferentes (!==) dos outros e retornar, se for igual retorna null =excluir */
  const removeTodo = (id)  => {    
    const newTodos = [...todos] 
    const filteredTodos = newTodos.filter(todo  => todo.id  !==  id ? todo : null );
    setTodos(filteredTodos); /*  Atualiza a memória hook */
 }; /* Esta função precisa ser atribuída a um botão */

 
 /** Function Complete */
 /** newTodos Atualiza a memória hook */
 const completeTodo = (id)  => {
  const newTodos = [...todos]
  newTodos.map(( todo ) =>  todo.id  ===  id ? (todo.isCompleted = !todo.isCompleted) : todo );
  setTodos(newTodos); 
};  
/** Agora temos que passar esta função para o componente ToDo no return */ 


  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      < Search search={ search } setSearch={ setSearch }/>
      <div className='todo-list'>
        {todos
         .filter( (todo) => todo.text.toLowerCase().includes(search.toLowerCase())
         )
         .map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App
