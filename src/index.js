import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Componente renderizado


const root = ReactDOM.createRoot(document.getElementById('root'));


/*Formas de cerar componentes*/
// Formas NO usadas
// class Componente extends React.Component
/*function Appp(){
  return(
    React.element("h1", {id: "title"}, "Imaynallan");
  );
}*/
// FORMA USADA
/*function Appp(){
  return(
    <h1 id="title">
      Imaynallan
    </h1>
  );
}*/
/*
De momento trabajamos con la versión
más simplificada del entorno de 
desarrollo de react.
Los props se mandan de padres a hijos
*/
root.render(
  // "saludo" no es atributo, es prop.
  // <App saludo="Jallallita"/>
  // HOLA APP es un prop.children
  <App>
    <h4>HOLA APP</h4>
  </App>
);
