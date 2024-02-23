import { useState, useTransition } from "react";

export default function AddProjectPanel({ saveClick, setSaveClick, projectArr, setProjectArr }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  

  function handleSave(event) {
    event.preventDefault();
    console.log(title, dueDate, description);
    const newProject = {title, dueDate, description}
    setProjectArr([...projectArr,newProject])
    setTitle("");
    setDescription("");
    setDueDate("");
    setSaveClick(false)
    console.log(projectArr[0])
  }

  function handleCancel() {
    setSaveClick(false)
    setTitle("")
    setDescription("")
    setDueDate("")
  }

  return (
    //"flex justify-center grid-cols-3 gap-4"
    <>
      {saveClick && (
        <div className="w-full fixed inset-36 flex flex-col items-center justify-center gap-y-4">
          <div className="flex justify-end w-1/3 gap-4">
            <button 
              className="w-20 h-10 rounded-lg hover:bg-black hover:text-white"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
            <button
              className="w-20 h-10 rounded-lg bg-black text-white hover:bg-slate-500 "
              onClick={handleSave}
            >
              Save
            </button>
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Title</label>
            <input
              type="text"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Description </label>
            <textarea
              type="text"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Due Date</label>
            <input
              type="date"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
}
