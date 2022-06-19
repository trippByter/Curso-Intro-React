import React from "react";
import "./TodoSearch.css";
/*-MANEJO DE EVENTOS(INTERNOS)-
"onSearchValueChange"
Reaccionar ante cada cambio del input. Ante cada
letra que escribe el usuario en el search,
esto, para poder llamar diferentes opciones
a mostrar al usuario */

/*-MANEJO DE ESTADOS- React.useState()
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
function TodoSearch(){
    
    const [searchValue, setSearchValue] = React.useState("");

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return[
        <input className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
};

// Con esta sintaxis indicamos que al hacer el import 
// que debemos usar los nombres de los componentes tal cual son.
export {TodoSearch};