import React from "react";
import "./CreateTodoButton.css";

/*-MANEJO DE EVENTOS(INTERNOS)-
const onClickButton = Función invocada cuando
reaccionamos al click del boton*/
function CreateTodoButton(props) {

  // Modificamos funcionamiento del botón
  // y modificamos el estado del modal
  const onClickButton = () => {
    // Madamos función a los actualizadores de estado
    // Devolvemos la negación del estado anterior. 
    // Si está false, será true y viceversa.
    props.setOpenModal(prevState => !prevState);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={ onClickButton}
    >
      +
    </button>
  );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export { CreateTodoButton };