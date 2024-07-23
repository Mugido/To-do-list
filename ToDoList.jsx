import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function startEditing(index) {
    setIsEditing(index);
    setEditTaskText(tasks[index]);
  }

  function handleEditChange(event) {
    setEditTaskText(event.target.value);
  }

  function saveEdit(index) {
    if (editTaskText.trim() !== "") {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? editTaskText : task
      );
      setTasks(updatedTasks);
      setIsEditing(null);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          isEditing === index ? (
            <li key={index}>
              <input
                type="text"
                className="edit-input"
                value={editTaskText}
                onChange={handleEditChange}
              />
              <button className="save-button" onClick={() => saveEdit(index)}>
                Save
              </button>
              <button className="cancel-button" onClick={() => setIsEditing(null)}>
                Cancel
              </button>
            </li>
          ) : (
            <li key={index}>
              <span className="text">{task}</span>
              <div>
                <button className="edit-button" onClick={() => startEditing(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                  👆
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </div>
            </li>
          )
        )}
      </ol>
    </div>
  );
}

export default ToDoList;
