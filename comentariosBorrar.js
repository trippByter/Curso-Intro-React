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
        }catch(error){
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
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
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
/*-----------------------*/
// Recibimos [item, setItem] del useLocalStorage
  // Usamos el custom hook de local storage
  // Los TODOS siguen siendo arrays
  const {
    // item será todos
    item: todos,
    // saveItem será saveTodos
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  // Contar cuantos Todos hemos completado 
  // y cuantos Todos tenemos en total.
  // !!todo.completed == true. Dos negativos dan positivo
  // .length: No devuelve array sino un número
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // searchedTodos va almacenando los valores que se van 
  // ingresando en el input. Ello, para ser comparados
  // con los TODOS que ya existen
  let searchedTodos = [];

  // Saber si ya han escrito en el input
  // Si el input esta vacío, el searchedTodos
  // será el "todos"(defaultTodos, por el momento)
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
    // Si ya han escrito algo
    // filtramos la cantidad
    // de searchedTodos"[]" 
  } else {
    searchedTodos = todos.filter(todo => {
      // Primero, convertimos a minúsculas, tanto
      // los "todos" como el input
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // Segundo, verificar y devolver si la lista  
      // de "todos" incluye el texto que recibimos del input
      return todoText.includes(searchText);

    });
  }

  /*
  const completeTodo = (text) => {} ;
  cambia el estado del "completed" a true, 
  al elemento ubicado que coincida con el "text",
  el cual, es recibido como parámetro de la función.
  completeTodos: Método para marcar los "todos" como completados.
  Recibimos el "todo.text" porque es el id del todo.
  "todoIndex": Posición del TODO que conincide con el "text".
  "newTodos": Clonamos los "todos" en una variable.
  "newTodos[todoIndex].completed = true;" cambia el "completed"
  del todo con la posicion encontrada, a true. 
  "setTodos(newTodos);": actualiza el estado con el cambio a newTodos.
  ESTA FUNCIÓN PROVOCA RE-RENDER PARA ENVIAR LA NUEVA LISTA DE TODOS
  */

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };
  /* Borrar TODOS
  "newTodos.splice(todoIndex, 1)": Quitamos desde el 
  índice(todoIndex), solo una posición
  */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

/*---------------------*/
loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

/*---------------------*/
<TodoList>
        {/* Estado Error */}
        {error && <p>Hubo un error...</p>}
        {/* Estado Cargando */}
        {loading && <p>Cargando...</p>}
        {/* Todo Correcto */}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        
        {/* key={} | Esto es para que react pueda
          identificar cual es cual (componente)
          dentro de una lista y evitar render
          innecesario cuando un elemento no 
          debe cambiar. 
          {todo.text} | De momento es la única prop
          que es distinta en el const todos 
          "key", "text", "completed" => PROPS*/}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>