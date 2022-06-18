import logo from './logo.svg';
import './App.css';
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

// Recibimos parámetros en el componente con los props.
function App(props) {
  return (
    // Usar "className" | no confunde class de js 
    // REACT renderiza "elementos" en el HTML
    // <div className="App"> , <header className="App-header"> , etc
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React Jallalla ! */}
          {/* {props.saludo} */}
          {props.children}
        </a>
      </header>
    </div>
  );
}

export default App;
