import ProjectPanel from "./components/ProjectPanel";
import AddProjectButton from "./components/AddProjectButton";
import AddProjectPanel from "./components/AddProjectPanel";
import { useState } from "react";

function App() {
  const [saveClick, setSaveClick] = useState(false)
  const [projectArr, setProjectArr] = useState([])
  return (
    <>
      <ProjectPanel projectArr={projectArr} setProjectArr={setProjectArr}/>
      <AddProjectButton setSaveClick={setSaveClick}/>
      <AddProjectPanel saveClick={saveClick} setSaveClick={setSaveClick} projectArr={projectArr} setProjectArr={setProjectArr}/>
    </>
  );
}

export default App;
