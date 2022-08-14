import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import alertify from 'alertifyjs';
import { IonButton, IonContent, useIonAlert, IonAlert } from '@ionic/react';
import { star } from 'ionicons/icons';


function Capslock(props){
  const textoinserido = props.children;
  const textoEmCapslock = textoinserido.toUpperCase();
  return <div>{textoEmCapslock}</div>

}

function Contador(){
 const [contador,setContador] = useState(1); 


  function adicionarContador(){
    setContador(contador + 1);  
    
    if(contador == 10){
      var text = `o numero é maior que ${contador}`;
      alert(text.toUpperCase());
    }
  }

  function diminuirContador(){
    setContador(contador - 1)
    if(contador <= 0){
      alert('Contador esta negativo');
    }
  }

  return (
    <div>
      <div class="card-shadow">
        <div class= "card-body">
          <h1 class = "text-success">{contador}</h1>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger" onClick={adicionarContador}>ADICIONAR</button>
            <button type="button" class="btn btn-success" onClick={diminuirContador}>DIMINUIR</button>
            <IonContent> 
              <IonButton color="primary">teste</IonButton>
            </IonContent>
            
          </div>
        </div>
      </div>  
    </div>

  )
}

function App() {
  return (
    <div className="App">
      <div class = "container" id="container">
        <strong>
          <h3 class= "text-success">
            <Capslock>Primeiro projeto reactjs</Capslock>
          </h3>
        </strong>
        <Contador></Contador>
      </div>
    </div>
  );
}

export default App;
