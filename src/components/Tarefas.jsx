import React from 'react';
import Tarefa from './Tarefa'

const Tarefas = ({ tarefas, handleTarefaClick, handleRemoverTarefa }) => {
  // console.log(tarefas);

  return (
    <div>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          handleTarefaClick={handleTarefaClick}
          handleRemoverTarefa={handleRemoverTarefa}
        />
      ))}
    </div>
  )
}

export default Tarefas;