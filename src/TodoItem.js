import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    // Esta función muestra un alert
    // cuando clicamos en " √ "
    const onComplete = () => {
      alert("Ya completaste el todo: " + props.text)
    };

    // Esta función muestra un alert
    // cuando clicamos en " X "
    const onDelete = () => {
      alert("Borraste el todo: " + props.text)
    };
    return (

      <li className="TodoItem">
        {/* Si props.completed es true, entonces colocamos "Icon-check--active"*/}
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onComplete}
        >
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick={onDelete}
        >
          X
        </span>
      </li>
    );
  }

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoItem};