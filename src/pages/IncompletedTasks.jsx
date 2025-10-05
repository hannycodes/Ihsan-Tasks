import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskCard from "../components/Task/TaskCard";

export default function IncompletedTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const incompletedTasks = tasks.filter(task => !task.completed);

  const handleToggleComplete = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const handleDelete = (id) =>
    setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">Incompleted Tasks</h1>

      {incompletedTasks.length === 0 ? (
        <p className="text-center text-yellow-400 italic mt-6">No pending tasks!</p>
      ) : (
        <div className="mt-6 space-y-4">
          {incompletedTasks.map(task => (
            <TaskCard
              key={task.id}
              {...task}
              onToggle={() => handleToggleComplete(task.id)}
              onDelete={() => handleDelete(task.id)}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
