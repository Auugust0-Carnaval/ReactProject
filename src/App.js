import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import alertify from 'alertifyjs';
import { IonButton, IonContent, useIonAlert, IonAlert } from '@ionic/react';
import { star } from 'ionicons/icons';

import { toast } from 'react-toastify';

function Capslock(props){
  const textoinserido = props.children;
  const textoEmCapslock = textoinserido.toUpperCase();
  return <div>{textoEmCapslock}</div>

}

function Contador(){

 const [contador,setContador] = useState(1); 


  function adicionarContador(){
    setContador(contador + 1);  
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
          </div>
        </div>
      </div>  
    </div>

  )
}

function App() {

  const text = `perigo`;

  const notify = () => {
    toast("ola");
  }

  return (
    <div className="App">
      <div class = "container" id="container">
        <strong>
          <h3 class= "text-success">
            <Capslock>Primeiro projeto reactjs</Capslock>
          </h3>
        </strong>
        <Contador></Contador><hr></hr>
        <button onClick={notify}>Notify</button>
      </div>
    </div>
  );
}

export default App;


// import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;