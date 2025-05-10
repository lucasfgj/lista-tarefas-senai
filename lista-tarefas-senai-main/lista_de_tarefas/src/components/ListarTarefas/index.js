import React from 'react';
import './styles.css';

const ListarTarefas = ({tarefas}) => {
    return (
        <div className='list-tarefas'>
            <h2>Lista de Tarefas</h2>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ol>
        </div>
    )
}

export default ListarTarefas;