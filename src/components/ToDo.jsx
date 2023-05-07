import { useState } from "react";

function ToDo() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])


  const handleToDo = () => {
    setTasks([...tasks, {

      id: tasks.length + 1,
      content: task
    }])
  }

  const deleteTask = (id) => {

    const filteredTasks = tasks.filter(ele => ele.id !== id)
    setTasks([...filteredTasks])
  }

  return <div className="todo">

    <div className="todo-inp">
      <input type="text" onChange={(e) => { setTask(e.target.value) }} />
      <button onClick={handleToDo}>submit</button>
    </div>

    {tasks.map(ele => {
      console.log(ele.content);
      return <div className="tasks" key={ele.id}>
        <p >{ele.content}</p>
        <button onClick={() => deleteTask(ele.id)}>delete</button>
      </div>
    })}

  </div>;
}

export default ToDo;
