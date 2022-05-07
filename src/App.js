import './App.css';
import AddTask from './components/AddTask';


import { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Tasks from './components/Tasks';



function App() {

  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);



  useEffect(() => {
    alert('Welcome to our app')
  }, []);

 const addTask = (task) => {

 }

  return (
    <>
      <div className='container'>
        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextColor={showAddTask} />

        {showAddTask && <AddTask onSave={addTask} />}

        {
          tasks.length > 0 ?
            (<Tasks tasks={tasks} />) :
            ('No Task Found !')
        }

      </div>
    </>
  );
}

export default App;
