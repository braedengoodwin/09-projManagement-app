import { useState } from "react";
import AddProjectButton from "./AddProjectButton";

export default function ProjectPanel({projectArr}){


    return(
        
        <div className="fixed bottom-0 left-0 h-[850px] w-96 rounded-tr-2xl bg-black "> 
            <div className="mt-12 text-2xl text font-bold text-white text-center">YOUR PROJECTS 
            </div>
            <ol>
                {projectArr.map((project, index) => (
                    <li key={index} className="text-white">
                        <div>Title: {project.titel}</div>
                        
                    </li>
                ))}
               
            </ol>
            <div className="flex justify-center mt-6">
                
            </div>
        </div>
       
        
    )
}