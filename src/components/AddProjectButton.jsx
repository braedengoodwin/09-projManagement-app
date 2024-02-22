import { useState } from "react";
import AddProjectPanel from "./AddProjectPanel";

export default function AddProjectButton({setButtonClick}) {
  //const [buttonClick, setButtonClick] = useState(false);

  // function handleClick() {
  //   setButtonClick(true);
  // }

  return (
    <>
      <div className="fixed left-36 top-1/3 transform -translate-x-1/4 -translate-y-2/4">
        <button
          className="w-36 h-12 bg-neutral-700 text-neutral-500 hover:bg-neutral-500 hover:text-white rounded-md text-lg font-semibold"
          onClick={() => setButtonClick(true)}
        >
          + Add Project
        </button>
        
      </div>
    </>
  );
}
