import React, { useState, useEffect } from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// import './App.css';
/* 
Componentes, invisibles HTML.
Componentes, visibles REACT.
REACT trabaja con componentes (se escriben en JSX).
REACT renderiza componentes como "elementos" en el HTML.
"function App" NO crea elementos HTML,
"REACT" NO crea elementos HTML,
sólo trabaja con el formato JSX.
Babel transforma el código JS de function App.
*/



// Test
/*
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Curso React", completed: false },
  { text: "Bailar salsa", completed: true },
  { text: "Ser fullstack", completed: false },
]
*/

/*ABSTRACCIÓN DE LÓGICA DEL MANEJO DE ESTADO
EN APP.JS
-MANEJO DE ESTADOS- React.useState()
"const estado"
Las props son estáticas, los estados son manipulables.
Los estados cambian cuando el usuario interactua
En el componente APP(Padre), creamos un estado y lo
pasamos a los hijos. Logrando que, sin importar en cua
de los componentes sea. Todos los componentes cambian.
[state, setState] = "setState" es una function que edita,
modifica el "state".
BUSQUEDA TIPO GOOGLE
-Creamos un estado con string vacío que guaradamos en 
"searchValue" y "setSearchValue" modifica el searchValue
- "value={searchValue}" es el valor actual del input, el cual
se irá modificando con "onChange={onSearchValueChange}"
*/
// Recibimos parámetros en el componente con los props.
function App() {

  /*MANEJO DE EFECTOS
  Es un react hook que nos permite ejecutar cierta
  parte del código de los componentes, para que
  no se ejecuten cada vez que se
  haga render del componente sino, dependiend de 
  ciertas condiciones.
  Simulamos el tiempo de espera del request 
  hecho hacia una API externa. En este tiempo la
  aplicación no debe quedar en blanco. Una vez el
  request se ejecuta, mostrar la info.
  Se necesitan tres estados de carga:
  - Cargando información.
  - Hubo un error.
  - Todo correcto.
  
  useEffect(() =>{
    console.log('Imaynallan useEffect')
  }, [las veces q hayan cambios en...] );
  Ejecuta el código que se le envía,
  justo antes de renderizar, es decir, cuando 
  react tiene todo preparado para renderizar
  */

  // console.log("Imaynallan Render before useEffect")

  // useEffect(() =>{
  //   console.log('Imaynallan useEffect')
  // }, [totalTodos] );

  // console.log("Imaynallan Render after useEffect")

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
