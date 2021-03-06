import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import alertify from 'alertifyjs';

function Capslock(props){
  const textoinserido = props.children;
  const textoEmCapslock = textoinserido.toUpperCase();

  return <div>{textoEmCapslock}</div>

}

function ModalAlert(){
  alertify.dialog('alert').set({transition:'flipx',message: 'CONTADOR CHEGOU PASSOU DE 10'}).show(); 
}


function Contador(){
 const [contador,setContador] = useState(1); 


  function adicionarContador(){
    setContador(contador + 1);  
    
    if(contador == 10){
      ModalAlert();
    }
  }

  function diminuirContador(){
    setContador(contador - 1)
  }

  return (
    <div>
      <div class="card-shadow">
        <div class= "card-body">
          <h1 class = "text-success">{contador}</h1>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger" onClick={adicionarContador}>ADICIONAR</button>
            <button type="button" class="btn btn-success" onClick={diminuirContador}>DIMINUIR</button>
          </div>
        </div>
      </div>  
    </div>

  )
}

function App() {

  return (
    <div className="App">
      <strong class="text-primary">
       <Capslock>augusto de oliveira carnaval</Capslock>
      </strong>

      <Contador/>
    </div>
  );
}

export default App;
