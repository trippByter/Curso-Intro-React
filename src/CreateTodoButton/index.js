import React from "react";
import "./CreateTodoButton.css";

/*-MANEJO DE EVENTOS(INTERNOS)-
const onClickButton = Función invocada cuando
reaccionamos al click del boton*/
function CreateTodoButton(props) {

  // Modificamos funcionamiento del botón
  // y modificamos el estado del modal
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => { onClickButton("Imaynallan click") }}
    >
      +
    </button>
  );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export { CreateTodoButton };