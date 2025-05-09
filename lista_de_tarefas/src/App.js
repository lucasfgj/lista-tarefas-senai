
import { useState } from 'react';
import './App.css';

function App() {
  const[tarefa, setTarefa] = useState('');
  const[tarefas, setTarefas] = useState(['Estudar', 'Malhar', 'Jogar']);

  const criarTarefa = () => {
      if(tarefas.includes(tarefa)){
        alert('Tarefa já existe!!');
        return;
      }

      setTarefas([...tarefas, tarefa])
      setTarefa('');  
  }

  return (
    <div className='container'>
      <img src='https://cdn6.aptoide.com/imgs/a/d/2/ad2877a4573c447408aa4a46ef641cf0_icon.png'></img>
      <h1>Lista de Tarefas</h1>
      <hr/>
      <div className='criarTarefa'>
      <input type='text' placeholder='Nova tarefa' value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
      <button onClick={criarTarefa}>Criar</button>
      </div>
      <hr/>
      <h2>Lista de Tarefas</h2>
      <ol>
        {tarefas.map((tarefa, index) => (<li key={index}>{tarefa}</li>))}
      </ol>
    </div>
  );
}

export default App;
