import React from "react";



const TaskCard = ({ title, description, dueDate, priority, completed, onToggle, onDelete, onEdit }) => {

  const handleEditClick = () => {
    const updatedTitle = prompt("Edit Title:", title);
    const updatedDescription = prompt("Edit Description:", description);
    const updatedDueDate = prompt("Edit Due Date:", dueDate);
    const updatedPriority = prompt("Edit Priority (Low/Medium/High):", priority);

    if (updatedTitle) {
      onEdit({
        title: updatedTitle,
        description: updatedDescription,
        dueDate: updatedDueDate,
        priority: updatedPriority,
      });
    }
  };

  return (
    <div className= "flex justify-between items-center bg-[#FCF9EA] border border-[#ccc] rounded-lg p-3.5 mt-2.5 shadow-[0px_2px_5px_rgba(0,0,0,0.1)]">
      <div >
       <h3 className={`text-[#2c3e50] mb-2 ${completed ? " line-through text-[#999]" : ""}`}>{title}</h3>
        {description && <p className="flex-grow flex-shrink flex-70 text-sm text-[#555]">{description}</p>}
        <p className="mt-0.5 text-[#555] ">Due: {dueDate}</p>
        <p className={`font-medium ${priority.toLowerCase() === "high"? "text-red-500" : priority.toLowerCase() === "medium" ? "text-yellow-500" : "text-green-600"}`}>{priority}</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm" onClick={onToggle}>{completed ? "Undo" : "Complete"}</button>
        <button className="bg-green-400 hover:bg-blue-400 text-white px-3 py-1 rounded-md text-sm" onClick={onEdit}>Edit</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
