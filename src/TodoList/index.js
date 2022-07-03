import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export { TodoList };