import  React, {useState} from "react";
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
const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Curso React", completed: false},
  {text: "Bailar salsa", completed: true},
  {text: "Ser fullstack", completed: false},
]

/*ABSTRACCIÓN DE LÓGICA DEL MANEJO DE ESTADO
EN APP.JS
-MANEJO DE ESTADOS- React.useState()
"const estado"
Las props son estáticas, los estados son manipulables.
Los estados cambian cuando el usuario interactua
En el componente APP(Padre), creamos un estado y lo
pasamos a los hijos. Logrando que, sin importar en cua
de los componentes sea. Todos los componentes cambian.
[state, setState] = "setState" es una function que edita,
modifica el "state".
BUSQUEDA TIPO GOOGLE
-Creamos un estado con string vacío que guaradamos en 
"searchValue" y "setSearchValue" modifica el searchValue
- "value={searchValue}" es el valor actual del input, el cual
se irá modificando con "onChange={onSearchValueChange}"
*/
// Recibimos parámetros en el componente con los props.
function App() {
  // Los todos se manejan con states porque permite
  // cambiar los valores de alguna variable para que
  // la app reaccione ante esos cambios
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  // Contar cuantos Todos hemos completado 
  // y cuantos Todos tenemos en total.
  // !!todo.completed == true. Dos negativos dan positivo
  // .length: No devuelve array sino un número
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // searchedTodos va almacenando los valores que se van 
  // ingresando en el input. Ello, para ser comparados
  // con los TODOS que ya existen
  let searchedTodos = [];

  // Saber si ya han escrito en el input
  // Si el input esta vacío, el searchedTodos
  // será el "todos"(defaultTodos, por el momento)
  if (!searchValue.length >= 1){
    searchedTodos = todos;
    // Si ya han escrito algo
    // filtramos la cantidad
    // de searchedTodos"[]" 
  } else {
    searchedTodos = todos.filter(todo =>{
      // Primero, convertimos a minúsculas, tanto
      // los "todos" como el input
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // Segundo, verificar y devolver si la lista  
      // de "todos" incluye el texto que recibimos del input
      return todoText.includes(searchText);

    });
  }


  // ToDoList recibe los ToDo que generan los usuarios
  // ToDoItem guardara su contenido por dentro y 
  // con los props cambiamos el contenido de cada ToDo
  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {/* key={} | Esto es para que react pueda
          identificar cual es cual (componente)
          dentro de una lista y evitar render
          innecesario cuando un elemento no 
          debe cambiar. 
          {todo.text} | De momento es la única prop
          que es distinta en el const todos 
          "key", "text", "completed" => PROPS*/}
        {searchedTodos.map(todo => (
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
