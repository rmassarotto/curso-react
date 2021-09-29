import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from './Button';
import './DetalhesTarefa.css'

const DetalhesTarefa = () => {
  const { tarefaTitle } = useParams();
  const history = useHistory();

  const handleVoltarClick = () => {
    history.goBack();
  }

  return (
    <div>
      <div className="voltar-button-conteiner">
        <Button onClick={handleVoltarClick}>Voltar</Button>
      </div>
      <div className="detalhes-tarefa-container">
        <h2>{tarefaTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem, sint deserunt ullam enim nostrum.
        </p>
      </div>
    </div>
  );
}

export default DetalhesTarefa;