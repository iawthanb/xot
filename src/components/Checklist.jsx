import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const Checklist = ({ className }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={`checklist-container ${className}`}>
      <h4>Your Tasks</h4>
      <p>If you need to acomplish a set of tasks today, add them here to track you progress.</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyPress={handleKeyPress} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map((task, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Form.Check type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(index)} />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'gray' : 'black',
                  marginLeft: '0.5rem',
                }}
              >
                {task.text}
              </span>
            </div>
            <Button variant="danger" size="sm" onClick={() => handleRemoveTask(index)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Checklist;
