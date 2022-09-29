/*REACT CONTEXT
Sirve para manejar los estados desde un "provider",
evita exceso de estados entre los props.
*/

import React, { useState, useEffect } from 'react';
// Llamamos al useLocalStorage desde esta misma carpeta
import { useLocalStorage } from './useLocalStorage';
/*Componentes PROVIDER y CONSUMER
--PROVIDER:
	Usado para envolver toda la aplicación
	del componente APP.js
--CONSUMER:
	Usado en todas partes que se requiera usar
	elementos del provider
 */
const TodoContext = React.createContext();

// Este componente envuelve a toda la aplicación
// Contiene componentes que serán llamados por
// el CONSUMER
function TodoProvider(props){
	// Recibimos [item, setItem] del useLocalStorage
  // Usamos el custom hook de local storage
  // Los TODOS siguen siendo arrays
  const {
    // item será todos
    item: todos,
    // saveItem será saveTodos
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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

	// El objeto "value" contiene las propiedades
	// a compartir con el "provider".
	return (
		<TodoContext.Provider value={{
			loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
		}}>
			{props.children}
		</TodoContext.Provider>
	);
};

export {TodoContext, TodoProvider};