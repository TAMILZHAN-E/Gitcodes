import React from "react";
import { useState } from "react";

const Contact_task = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  return (
    <div>
      <center>
      <h1>Contact Me</h1>
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/><br /><br />
      <input type="tel" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)}/><br /><br />
      <input type="url" placeholder="Enter your LinkedIn URL" onChange={(e) => setLinkedin(e.target.value)}/><br /><br />
      <input type="url" placeholder="Enter your GitHub URL" onChange={(e) => setGithub(e.target.value)}/>
      <h2>My Contact Details</h2> 
      <p>Email: {email}</p> 
      <p>Phone: {phone}</p>
      <p>LinkedIn:
        <a href={linkedin} target="_blank" >{linkedin}</a>
      </p>
      <p>GitHub:
        <a href={github} target="_blank" >{github}</a>
      </p>
      </center>
    </div>
  );
};

export default Contact_task;
