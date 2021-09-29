import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import './Tarefa.css'

const Tarefa = ({ tarefa, handleTarefaClick, handleRemoverTarefa }) => {
  const history = useHistory()

  const handleTarefaDetalhesClick = () => {
    history.push(`/${tarefa.title}`)
  }

  return (
    <div
      className="tarefa-container"
      style={tarefa.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div
        className="tarefa-title"
        onClick={() => { handleTarefaClick(tarefa.id) }}
      >
        {tarefa.title}
      </div>

      <div className="buttons-container">
        <button
          className="ver-detalhes-tarefa-button"
          onClick={handleTarefaDetalhesClick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-tarefa-button"
          onClick={() => { handleRemoverTarefa(tarefa.id) }}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
}

export default Tarefa;