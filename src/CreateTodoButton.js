import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(){
    return(
        <button className="CreateTodoButton">+</button>
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {CreateTodoButton};