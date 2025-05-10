import React,{useState} from "react";
import './styles.css'

const CreateTarefa = ({onAddTarefa}) => {

    const[tarefa, setTarefa] = useState('');

    const handleChage = (event) => {
        setTarefa(event.target.value);
    }

    const criarTarefa = () => {
        if(tarefa.trim){
            onAddTarefa(tarefa);
            setTarefa('');
        }else{
            alert('Digite a Tarefa.');
        }
    };

    return(
        <div className='criarTarefa'>
        <h2>Criar Tarefa</h2>
        <input type='text' placeholder='Nova tarefa' value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
        <button onClick={criarTarefa}>Criar</button>
        </div>
    );
}

export default CreateTarefa;