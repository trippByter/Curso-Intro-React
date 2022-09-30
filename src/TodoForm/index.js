/*FORMULARIO PARA INGRESAR TODO*/
import React from "react";
import {TodoContext} from "../TodoContext"
import './TodoForm.css'

function TodoForm(){
	const [newTodoValue, setNewTodoValue] = React.useState("");

	// Añadimos nuevos TODOS desde el form
	const {
		addTodo,
		setOpenModal
	} = React.useContext(TodoContext);

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	const onCancel = () => {
		// Al clicar en cancelar, se cierra el modal
		setOpenModal(false);
	};

	const onSubmit = (event) => {
		// Cuando el form se envíe no tenemos que
		// recargar la página para enviar los datos
		event.preventDefault();
		if(newTodoValue.length <= 0)return;
		addTodo(newTodoValue);
		// Al clicar en "añadir", cerramos el modal
		setOpenModal(false);
	};

	return(
		<form onSubmit={onSubmit} >
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          type= "submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
          </button>
      </div>
    </form>
	);
};

export {TodoForm};