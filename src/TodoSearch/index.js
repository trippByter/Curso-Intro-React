import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
/*-MANEJO DE EVENTOS(INTERNOS)-
"event.target.value" devuelve el valor del input.
<input ...onChange={onSearchValueChange}/>
A cada cambio en el input, ejecutese "onSearchValueChange"
====STATES====
{searchValue, setSearchValue}
Se manejan como props d quien lo llame
"searchValue" => valor del input(state)
"setSearchValue" => actualiza el valor del input(state)
este ultimo, va dentro de la función onSearchValueChange
que recibe el "event" (lo q el user teclea) y este todo
ese valor es usado por el "setSearchValue" para cambiar el 
estado del "searchValue"
*/

function TodoSearch() {
  // Aplicamos lógica del React Context
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      key={setSearchValue}
      placeholder="Conócete a ti mismo..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export { TodoSearch };