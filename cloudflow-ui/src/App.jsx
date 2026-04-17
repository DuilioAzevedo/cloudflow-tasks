import { useEffect, useState } from 'react'
import axios from 'axios'
import { PlusCircle, CheckCircle, Trash2 } from 'lucide-react'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState('')

  // Função para alternar concluída
const toggleTask = async (id) => {
  await axios.patch(`http://localhost:8080/api/tasks/${id}`)
  fetchTasks()
}

// Função para deletar
const deleteTask = async (id) => {
  await axios.delete(`http://localhost:8080/api/tasks/${id}`)
  fetchTasks()
}

  // Função para buscar tarefas
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8080/api/tasks')
    setTasks(response.data)
  }

  useEffect(() => { fetchTasks() }, [])

  // Função para adicionar tarefa
  const addTask = async (e) => {
    e.preventDefault()
    if (!newTitle) return
    await axios.post('http://localhost:8080/api/tasks', {
      title: newTitle,
      description: "Criado via React",
      completed: false
    })
    setNewTitle('')
    fetchTasks() // Atualiza a lista
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <CheckCircle className="text-blue-500" /> CloudFlow Tasks
        </h1>

        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Nova tarefa..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
            <PlusCircle />
          </button>
        </form>

        <div className="space-y-3">
  {tasks.map(task => (
    
    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
      <span 
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer flex-1 ${task.completed ? "line-through text-gray-400" : "text-gray-700 font-medium"}`}
      >
        {task.title}
      </span>
      
      <button 
        onClick={() => deleteTask(task.id)} 
        className="text-red-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition"
      >
        <Trash2 size={18} />
      </button>
    </div>
  ))}
</div>
      </div>
    </div>
  )
}

export default App