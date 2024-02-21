import AddProject from "./AddProject";

export default function ProjectPanel(){
    return(
        <div className="fixed bottom-0 left-0 h-[850px] w-96 rounded-tr-2xl bg-black "> 
            <ol className="mt-12 text-2xl text font-bold text-white text-center">YOUR PROJECTS 
            </ol>
            <div className="flex justify-center mt-6">
                <AddProject/>
            </div>
        </div>
    )
}