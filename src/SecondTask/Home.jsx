import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { taskListAtom } from './Atom';

function Home() {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useRecoilState(taskListAtom);

  const handleAddTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask('');
  };

  const handleCheckTasks = () => {
    // Navigate to tasks page
  };

  return (
    <div>
      <h1>Welcome to your task manager!</h1>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      &nbsp;
      <button onClick={handleAddTask}>Add Task +</button> &nbsp;
      <button onClick={handleCheckTasks}>Check Tasks</button>
    </div>
  );
}

export default Home;
