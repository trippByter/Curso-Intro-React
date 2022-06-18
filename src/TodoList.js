import React from "react";

function TodoList(props){
    return(
        <section>
            {props.children}
        </section>
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoList};