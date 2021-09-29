import React, { useState } from 'react';
import Button from './Button';
import './AddTarefaBtn.css'

const AddTarefaBtn = ({ handleAdicionarTarefa }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setInputData(event.target.value);
  }

  const handleAdicionarTarefaClick = () => {
    handleAdicionarTarefa(inputData);
    setInputData('')
  }

  return (
    <div className="add-tarefa-container">
      <input onChange={handleInputChange}
        value={inputData}
        className="add-tarefa-input"
        type="text"
      />
      <div className='add-tarefa-btn-container'>
        <Button onClick={handleAdicionarTarefaClick}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTarefaBtn;