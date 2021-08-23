import React, { useState } from 'react';
import ListaRecursos from './components/Catalog/ListaRecursos';
import Header from './components/Header/Header';
import Summary from './components/Catalog/Summary';


function App() {

const [Usuario, setUsuario] = useState(0);

const selectHandler = (props) => {
  let usuarioSeleccionado = +props;
  setUsuario(usuarioSeleccionado);
}

  return (
    <div>
      <Header onSelectHandler={selectHandler}/>
      <Summary/>
      <ListaRecursos Usuario={Usuario}/>
    </div>
  );
}

export default App;
