import React from "react";
import "./CreateTodoButton.css";

/*-MANEJO DE EVENTOS(INTERNOS)-
const onClickButton = Función invocada cuando
reaccionamos al click del boton*/ 
function CreateTodoButton(props){

    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => {onClickButton("Imaynallan click")}}
        >
            +
        </button>
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {CreateTodoButton};