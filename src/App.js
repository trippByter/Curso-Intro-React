import  React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import logo from './logo.svg';
// import './App.css';
/* 
Componentes, invisibles HTML.
Componentes, visibles REACT.
REACT trabaja con componentes (se escriben en JSX).
REACT renderiza componentes como "elementos" en el HTML.
"function App" NO crea elementos HTML,
"REACT" NO crea elementos HTML,
sólo trabaja con el formato JSX.
Babel transforma el código JS de function App.
*/



// Test
const todos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Curso React", completed: false},
  {text: "Bailar salsa", completed: false},
]
// Recibimos parámetros en el componente con los props.
function App(props) {
  // ToDoList recibe los ToDo que generan los usuarios
  // ToDoItem guardara su contenido por dentro y 
  // con los props cambiamos el contenido de cada ToDo
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* key={} | Esto es para que react pueda
          identificar cual es cual (componente)
          dentro de una lista y evitar render
          innecesario cuando un elemento no 
          debe cambiar. 
          {todo.text} | De momento es la única prop
          que es distinta en el const todos */}
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
