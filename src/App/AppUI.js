/*
Para seguir las reglas de state full y state less,
creamos este archivo que es la abstracción de la UI
de App.js
*/

import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";



// ToDoList recibe los ToDo que generan los usuarios
// ToDoItem guardara su contenido por dentro y 
// con los props cambiamos el contenido de cada ToDo
function AppUI(){
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {/* Estado Error */}
        {error && <p>Hubo un error...</p>}
        {/* Estado Cargando */}
        {loading && <p>Cargando...</p>}
        {/* Todo Correcto */}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        
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
           	onComplete={() => completeTodo(todo.text)}
           	onDelete={() => deleteTodo(todo.text)}
         	/>
        ))}
      </TodoList>
      {/* !!openModal -- Si openModal es TRUE,
      entonces renderiza <MODAL> */}
      {!!openModal && (
        <Modal>
        <p>{searchedTodos[0]?.text}</p>
      </Modal>
      )}
      {/* El botón actualiza el estado del modal
      y lo hace aparecer */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
	);
};

export { AppUI };