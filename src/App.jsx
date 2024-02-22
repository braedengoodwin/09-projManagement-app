import ProjectPanel from "./components/ProjectPanel";
import AddProjectButton from "./components/AddProjectButton";
import AddProjectPanel from "./components/AddProjectPanel";
import { useState } from "react";

function App() {
  const [buttonClick, setButtonClick] = useState(false)
  return (
    <>
      <ProjectPanel />
      <AddProjectButton setButtonClick={setButtonClick}/>
      <AddProjectPanel buttonClick={buttonClick} />
    </>
  );
}

export default App;
