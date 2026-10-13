import React from "react";
import { useState } from "react";

const Projects_task = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);

  const addProject=()=> {
    if (name !== "" && description !== "") {
      setProjects([...projects, { name: name, description: description }]);
      setName("");
      setDescription("");
    }
  }
  return (
    <div>
      <center>
      <h1>My Projects</h1>
      <input type="text" placeholder="Project Name"  onChange={(e) => setName(e.target.value)}/><br /><br />
      <textarea placeholder="Project Description"  onChange={(e) => setDescription(e.target.value)}/>
      <br />
      <br /> 
      <button onClick={addProject}>Add Project</button>
      <h2>My Project List</h2>
      {projects.map((project) => (
        <div >
          <h3>{project.name}</h3> <p>{project.description}</p> <hr/>
        </div>
      ))}
      </center>
    </div>
  );
};

export default Projects_task;
