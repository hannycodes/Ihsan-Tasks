import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import useLocalStorage from "../../hooks/useLocalStorage";

const TaskApp = ({ filter = "all" }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  // Add or update task
  const handleAddTask = (taskData) => {
    if (taskBeingEdited) {
      setTasks(tasks.map(task =>
        task.id === taskBeingEdited.id ? { ...task, ...taskData } : task
      ));
      setTaskBeingEdited(null);
    } else {
      setTasks([...tasks, { ...taskData, id: Date.now(), completed: false }]);
    }
  };

  // Toggle complete
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Edit task (pre-fill form)
  const handleEditTask = (task) => {
    setTaskBeingEdited(task);
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        initialTask={taskBeingEdited}
      />

      {/* Empty state */}
      {filteredTasks.length === 0 && (
        <p className="text-center text-yellow-400 mt-6 italic">
          {filter === "completed" && "No completed tasks yet!"}
          {filter === "incompleted" && "No incompleted tasks yet!"}
          {filter === "all" && "Start by adding your first task!!"}
        </p>
      )}

      {/* Task list */}
      <div className="mt-6 space-y-4">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            completed={task.completed}
            onToggle={() => handleToggleComplete(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </div>

      {/* Motivational message */}
      {filteredTasks.length > 0 && filteredTasks.every(task => task.completed) && (
        <p className="mt-6 text-center text-yellow-600 font-semibold animate-bounce">
          Keep up the good work!!!
        </p>
      )}
    </div>
  );
};

export default TaskApp;
