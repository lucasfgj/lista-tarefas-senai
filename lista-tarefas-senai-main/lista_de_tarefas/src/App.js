
import { useState } from 'react';
import './App.css';
import CreateTarefa from './components/CreateTarefa';
import ListarTarefas from './components/ListarTarefas';

function App() {

  const [tarefas, setUsuarios] = useState(['Estudar', 'Jogar', 'Correr']);
  const adicionarTarefa = (novaTarefa) => {
    if(tarefas.includes(novaTarefa)){
      alert('Usuario já existe na lista.');
      return;
    }
    setUsuarios([...tarefas, novaTarefa]);
  }

  
  return (
    <div className='App'>
      <img src='https://cdn6.aptoide.com/imgs/a/d/2/ad2877a4573c447408aa4a46ef641cf0_icon.png'></img>
      <h1>Lista de Tarefas</h1>
      <hr/>
      <CreateTarefa onAddTarefa={adicionarTarefa}/>
      <hr/>
      <ListarTarefas tarefas={tarefas}/>
    </div>
  );
}

export default App;
