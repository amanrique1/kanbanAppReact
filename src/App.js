import React from 'react';
import './App.css';
import TaskList from './components/TaskList'

function App() {
  const lorem="Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit placerat felis habitant natoque, tellus vulputate sociosqu duis nibh litora sapien blandit feugiat metus.";
  const tasks = [
    { "tittle": "To do", "tasks": [{ tittle: "Lorem", description: lorem }, { tittle: "Lorem", description: lorem}] },
    { "tittle": "Doing", "tasks": [{ tittle: "Lorem", description: lorem }, { tittle: "Lorem", description: lorem }] },
    { "tittle": "Done", "tasks": [{ tittle: "Lorem", description: lorem}, { tittle: "Lorem", description: lorem }] }
  ]
  return (
    <div className="App">
      <h1>My Kanban App</h1>
      <hr></hr>
      <div className="row">
        <TaskList tskl={tasks[0]} />
        <TaskList tskl={tasks[1]} />
        <TaskList tskl={tasks[2]} />
      </div>

    </div>
  );
}

export default App;
