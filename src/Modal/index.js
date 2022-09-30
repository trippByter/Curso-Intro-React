/*PORTALES: TELETRANSPORTACIÓN DE COMPONENTES
Se usan para renderizar componentes en distintos
elementos del DOM. Con el fin de no duplicar
componentes.
Este componente (Modal) será reutilizado para
otras instancias de la app. Por tanto, debemos
abstraer la lógica de su funcionamiento.
-({children})- Indica que cada vez que se llama
al componente Modal, se le enviará un "children".
-ReactDOM.createPortal(
		qué se renderiza,
		dónde se renderiza;
	);
*/
import ReactDOM from 'react-dom';
import "./Modal.css"

function Modal({children}){
	return ReactDOM.createPortal(
		<div className="ModalBackground">
			{children}
		</div>,
		document.getElementById("modal"),
	);
};

export {Modal};