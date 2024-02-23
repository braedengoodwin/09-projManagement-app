import { useState } from "react";
import AddProjectButton from "./AddProjectButton";
import ProjectDetailPanel from "./ProjectDetailsPanel";

export default function ProjectPanel({ projectArr }) {
  const [projectClick, setProjectClick] = useState(false);

  function handleClick() {
    setProjectClick(true);
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 h-[850px] w-96 rounded-tr-2xl bg-black ">
        <div className="mt-12 text-2xl text font-bold text-white text-center">
          YOUR PROJECTS
        </div>
        <ol className="flex flex-col items-start gap-3 mt-36 ml-[100px] ">
          {projectArr.map((project, index) => (
            <li key={index} className="text-white">
              <button
                className="w-56 h-10 rounded-md text-left pl-3 pb-1 text-xl hover:bg-neutral-700 "
                onClick={handleClick}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {projectClick && (
        <ProjectDetailPanel projectArr={projectArr}/>
      )}
    </>
  );
}
