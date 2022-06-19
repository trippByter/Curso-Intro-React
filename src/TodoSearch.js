import React from "react";
import "./TodoSearch.css";
/*-MANEJO DE EVENTOS(INTERNOS)-
"onSearchValueChange"
Reaccionar ante cada cambio del input. Ante cada
letra que escribe el usuario en el search,
esto, para poder llamar diferentes opciones
a mostrar al usuario */
function TodoSearch(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };
    return(
        <input className="TodoSearch" 
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        />
    );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoSearch};