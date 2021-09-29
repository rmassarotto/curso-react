import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tarefas from './components/Tarefas'
import Header from './components/Header';
import AddTarefaBtn from './components/AddTarefaBtn'
import DetalhesTarefa from './components/DetalhesTarefa'
import './App.css'

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      title: 'Teste',
      completed: false
    },
    {
      id: 2,
      title: 'TESTE 2',
      completed: true
    },
  ])

  useEffect(() => {
    const fetchTarefas = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTarefas(data)
    }

    fetchTarefas();
  }, []);

  const handleTarefaClick = (tarefaId) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) return { ...tarefa, completed: !tarefa.completed }

      return tarefa
    })

    setTarefas(novasTarefas);
  }

  const handleAdicionarTarefa = (titleTarefa) => {
    const novasTarefas = [...tarefas, {
      title: titleTarefa,
      id: uuidv4(),
      completed: false
    }]
    setTarefas(novasTarefas)
  }

  const handleRemoverTarefa = (tarefaId) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== tarefaId)

    setTarefas(novasTarefas)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <AddTarefaBtn handleAdicionarTarefa={handleAdicionarTarefa} />
              <Tarefas
                tarefas={tarefas}
                handleTarefaClick={handleTarefaClick}
                handleRemoverTarefa={handleRemoverTarefa}
              />
            </div>
          )}
        />
        <Route
          path="/:tarefaTitle"
          exact
          component={DetalhesTarefa}
        />

      </div>
      {/* <button onClick={() => setTarefas()}></button> */}

    </Router>
  )



}

export default App;