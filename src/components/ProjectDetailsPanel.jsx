import { useState } from "react";

export default function ProjectDetailPanel({ projectArr, setProjectArr }) {
  const [deleteClick, setDeleteClick] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  

  function handleAddTask(event) {
    event.preventDefault()
    setAddTask(true);
    setTask("");
    setTaskArr([...taskArr, task]);
  }

  function handleDelete(index) {
    setProjectArr(projectArr.filter((_, i) => i !== index))
  }

  function handleTaskDelete(index) {
    setTaskArr(taskArr.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full fixed bottom-96 inset-36 flex flex-col items-center justify-center gap-y-10">
      <div className="">
        {projectArr.map((project, index) => (
          <div key={index} className="text-black">
            <div className="flex justify-between">
              <label className="text-4xl font-bold">{project.title}</label>
              <button className="flex rounded-md w-24 hover:bg-neutral-700 justify-center items-center font-medium text-lg"
                      onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
            <div className="my-4 text-lg font-medium text-slate-400">
              {project.dueDate}
            </div>
            <div className="text-lg font-medium max-w-[50vw] break-words">
              {project.description}
            </div>
          </div>
        ))}
        <hr className="my-6 w-full border-t-2 border-gray-300" />
        <div>
          <label className="text-black text-4xl font-bold">Tasks</label>
          <form className="flex justify-normal my-4" onSubmit={handleAddTask}>
            <input
              className="w-56 h-8 bg-gray-300 rounded-md"
              value={task}
              required
              onChange={(event) => setTask(event.target.value)}
            ></input>
            <button
              className="ml-4 flex rounded-md w-28 hover:bg-neutral-700 justify-center items-center font-medium text-lg"
              
            >
              Add tasks
            </button>
          </form>
          {taskArr.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-md">
              {taskArr.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="text-lg font-medium">{task}</div>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleTaskDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
