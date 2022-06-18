import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
    return(
        <input className="TodoSearch" placeholder="Cebolla"/>
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoSearch};