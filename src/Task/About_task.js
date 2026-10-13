import React from 'react'
import { useState } from 'react';

const About_task = () => {
  const [name, setName] = useState(""); 
  const [college, setCollege] = useState("");
   const [department, setDepartment] = useState("");
    const [about, setAbout] = useState(""); 
    return ( 
    <div> 
      <center>
      <h1>About Me</h1>
       <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /> <br /><br /> 
       <input type="text" placeholder="Enter your college" onChange={(e) => setCollege(e.target.value)} /> <br /><br /> 
       <input type="text" placeholder="Enter your department" onChange={(e) => setDepartment(e.target.value)} /> <br /><br /> 
       <textarea placeholder="Tell about yourself" onChange={(e) => setAbout(e.target.value)} /> <br /><br /> 
      <h2>My Details</h2> 
      <p>Name: {name}</p> 
      <p>College: {college}</p> 
      <p>Department: {department}</p> 
      <p>About Me: {about}</p> 
      </center>
      </div>
       );
}

export default About_task
