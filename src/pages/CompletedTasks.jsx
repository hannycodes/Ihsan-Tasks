import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";

export default function CompletedTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const completedTasks = tasks.filter(task => task.completed);

  const handleToggleComplete = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const handleDelete = (id) =>
    setTasks(tasks.filter(task => task.id !== id));

  const handleEdit = (task) => {};

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p className="text-center text-yellow-400 italic mt-6">No completed tasks yet!</p>
      ) : (
        <div className="mt-6 space-y-4">
          {completedTasks.map(task => (
            <TaskCard
              key={task.id}
              {...task}
              onToggle={() => handleToggleComplete(task.id)}
              onDelete={() => handleDelete(task.id)}
              onEdit={() => handleEdit(task)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
