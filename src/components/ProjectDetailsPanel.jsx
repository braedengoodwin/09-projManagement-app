export default function ProjectDetailPanel({projectArr}){
    
    return(
        <div className="w-full fixed bottom-96 inset-36 flex flex-col items-center justify-center gap-y-10">
          <div className="">
            {projectArr.map((project, index) => (
              <div key={index} className="text-black">
                <div className="flex justify-between">
                  <label className="text-4xl font-bold">{project.title}</label>
                  <button className="flex rounded-md w-24 hover:bg-neutral-700 justify-center items-center font-medium text-lg">
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
              <div className="flex justify-normal my-4">
                <input className="w-56 h-8 bg-gray-300 rounded-md"></input>
                <button className="ml-4 flex rounded-md w-28 hover:bg-neutral-700 justify-center items-center font-medium text-lg">Add tasks</button>
              </div>
            </div>
          </div>
        </div>
    )
}