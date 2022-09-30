import React, { useState, useEffect } from 'react';

/*CUSTOM HOOK PERSONALIZADO - LOCAL STORAGE
Abstraemos la lógica de la persistencia
de datos en local storage de AppUI.js
useLocalStorage()
Nos devuelve los item del local storage de los todos,
tambien el item de un elemento en local storage
itemName - Nombre del local storage("TODOS_V1")
*/
function useLocalStorage(itemName, initialValue) {

	// Creamos estado de carga. Simulando conx API
	// Al principio la aplicación estará cargando - true
	// Cambia el estado despues con el useEffect
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// Los "todos" se manejan con states porque permite
	// cambiar los valores de alguna variable para que
	// la app reaccione ante esos cambios
	// item - estado inicial || setItem - cambios al estado
	const [item, setItem] = useState(initialValue);

	// Todo esto se ejecuta en cada render.
	useEffect(() => {
		setTimeout(() => {
			// Metemos en bloque "try/catch" para
			// manejar los errores
			try {
				// Persisterncia de datos en localStorage
				// TODOS_V1 - nombre del elemento guardado en localStorage
				// Se invoca al local storage para traer un elemento
				// que nos viene como parámetro de la funcion
				const localStorageItem = localStorage.getItem(itemName);

				/*Creamos array vacío en caso que sea la primera vez
				localStorage.setItem(itemName, JSON.stringify([]));
				TODOS_V1 - 1er param, nombre del localStorage
				JSON.stringify([]) - 2do param, info a guardar. Solo texto.
				Cambiamos el JSON.stringify([]) por JSON.stringify(initialValue)
				porque el estado inicial no siempre es un array
				*/
				let parsedItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify([]));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				// Cambiamos el estado inicial con parasedItem
				setItem(parsedItem);
				setLoading(false);
			} catch (error) {
				// En caso de error, cambiamos el estado
				// del error
				setError(error);

			}
		}, 1000);
	});

	/* 
	PERSISTENCIA EN LOCALSTORAGE 
	NO SE EJECUTA EN CADA RENDER, SINO POR INVOCACION
	saveItem sirve de puente entre
	"completeTodo" y "deleteTodo".
	También guarda las actualizaciones de los item
	en local storage y en el estado del componente App
	newItem - array.
	stringifiedItem - convertir los Item a string.
	localStorage.setItem(nombre de ese storage, string a guardar).
	setItem(newItem) - cambiamos el estado
	*/
	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	// Si tenemos más estados en el custom hooks,
	// es recomendable retornar un objeto
	return {
		item,
		saveItem,
		loading,
		error,
	};
}

export {useLocalStorage};