import Home from './Home';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { taskListAtom } from './Atom';

function Task() {
  const taskList = useRecoilValue(taskListAtom);

  return (
    <>
      <h1>Your Tasks</h1>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      </>
    
  );
}

export default Task;
