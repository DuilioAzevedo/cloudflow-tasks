import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // Busca as tarefas do seu backend Java!
    axios.get('http://localhost:8080/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minhas Tarefas (CloudFlow)</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.completed ? "✅" : "⏳"}</li>
        ))}
      </ul>
    </div>
  )
}

export default App