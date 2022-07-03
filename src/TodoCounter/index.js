import React from "react";
// Agregar CSS | Importamos archivo css
import "./TodoCounter.css";

/* FORMAS NO USADAS DE CSS EN COMPONENTES
-Para agregar estilos en
los componentes, usar
<h2 style={}>TEXTO</h2>

-Uso de camelCase en reemplazo
de guiones: background-color
const estilos = {
  color: "#fff",
  backgroundColor: "#333",
};

-Para usar estilos en línea,
usar doble llave
<h2 style={{
  color: "#fff",
  backgroundColor: "#333",
}}>Has completado 02 de 03 ToDo</h2>
*/

// {total, completed} == props
function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TO DO's</h2>
  );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export { TodoCounter };