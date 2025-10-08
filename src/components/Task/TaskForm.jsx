import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  // Prefill fields if editing a task
  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setDueDate(initialTask.dueDate);
      setPriority(initialTask.priority);
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if(!title.trim()){
      setError("Task title cannot be blank");
      return;
    }

    onSubmit({ title, description, dueDate, priority });

    setError("");
  
    // Reset form only if adding a new task
    if (!initialTask) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-[10px] items-center">
      <input className=" w-full p-2 mt-[5px] border border-[#ccc] rounded-[5px] text-base box-border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        
      />
      {error && <p className="text-[red] mt-1.5 font-bold">{error}</p>}

      <textarea className="w-full p-2 mt-[5px] border border-[#ccc] rounded-[5px] text-base box-border resize-none h-[42px]"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <input className="w-full p-2 mt-[5px] border border-[#ccc] rounded-[5px] text-base box-border"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select className="w-full p-2 mt-[5px] border border-[#ccc] rounded-[5px] text-base box-border" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="w-full p-2 mt-[5px] border border-[#ccc] rounded-[5px] text-base box-border bg-[#CAE8BD] hover:bg-[#B0DB9C]"type="submit">{initialTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
