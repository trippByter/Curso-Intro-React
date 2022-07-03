import React, { useState } from 'react';
import { AppUI } from './AppUI'
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
/*
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Curso React", completed: false },
  { text: "Bailar salsa", completed: true },
  { text: "Ser fullstack", completed: false },
]
*/

/*CUSTOM HOOK PERSONALIZADO - LOCAL STORAGE
Abstraemos la lógica de la persistencia
de datos en local storage de AppUI.js
useLocalStorage()
Nos devuelve los item del local storage de los todos,
tambien el item de un elemento en local storage
itemName - Nombre del local storage("TODOS_V1")
*/
function useLocalStorage(itemName, initialValue){
  // Persisterncia de datos en localStorage
  // TODOS_V1 - nombre del elemento guardado en localStorage
  // Se invoca al local storage para traer un elemento
  // que nos viene como parámetro de la funcion
  const localStorageItem = localStorage.getItem(itemName);

  /*Creamos array vacío en caso que sea la primera vez
  localStorage.setItem(itemName, JSON.stringify([]));
  TODOS_V1 - 1er param, nombre del localStorage
  JSON.stringify([]) - 2do param, info a guardar. Solo texto.
  Cambiamos el JSON.stringify([]) por JSON.stringify(initialValue)
  porque el estado inicial no siempre es un array
  */
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  // Los "todos" se manejan con states porque permite
  // cambiar los valores de alguna variable para que
  // la app reaccione ante esos cambios
  // item - estado inicial || setItem - cambios al estado
  const [item, setItem] = useState(parsedItem);

  /* 
  PERSISTENCIA EN LOCALSTORAGE 
  saveItem sirve de puente entre
  "completeTodo" y "deleteTodo".
  También guarda las actualizaciones de los item
  en local storage y en el estado del componente App
  newItem - array.
  stringifiedItem - convertir los Item a string.
  localStorage.setItem(nombre de ese storage, string a guardar).
  setItem(newItem) - cambiamos el estado
  */
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ]
}

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
  // Recibimos [item, setItem] del useLocalStorage
  // Usamos el custom hook de local storage
  // Los TODOS siguen siendo arrays
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useLocalStorage("");

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
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
    // Si ya han escrito algo
    // filtramos la cantidad
    // de searchedTodos"[]" 
  } else {
    searchedTodos = todos.filter(todo => {
      // Primero, convertimos a minúsculas, tanto
      // los "todos" como el input
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // Segundo, verificar y devolver si la lista  
      // de "todos" incluye el texto que recibimos del input
      return todoText.includes(searchText);

    });
  }

  /*
  const completeTodo = (text) => {} ;
  cambia el estado del "completed" a true, 
  al elemento ubicado que coincida con el "text",
  el cual, es recibido como parámetro de la función.
  completeTodos: Método para marcar los "todos" como completados.
  Recibimos el "todo.text" porque es el id del todo.
  "todoIndex": Posición del TODO que conincide con el "text".
  "newTodos": Clonamos los "todos" en una variable.
  "newTodos[todoIndex].completed = true;" cambia el "completed"
  del todo con la posicion encontrada, a true. 
  "setTodos(newTodos);": actualiza el estado con el cambio a newTodos.
  ESTA FUNCIÓN PROVOCA RE-RENDER PARA ENVIAR LA NUEVA LISTA DE TODOS
  */

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };
  /* Borrar TODOS
  "newTodos.splice(todoIndex, 1)": Quitamos desde el 
  índice(todoIndex), solo una posición
  */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };



  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
