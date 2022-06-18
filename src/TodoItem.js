import React from "react";

function TodoItem(props){
    return(
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoItem};