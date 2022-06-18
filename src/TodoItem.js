import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        {/* Si props.completed es true, entonces colocamos "Icon-check--active"*/}
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    );
  }

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoItem};