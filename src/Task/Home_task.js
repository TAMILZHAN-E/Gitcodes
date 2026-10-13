import React from 'react'
import {Link,BrowserRouter,Routes} from 'react-router-dom'
import { useState } from 'react';

const Home_task = () => {
  // const data=[{
  //   id:"01",
  //   name:"TAMIL",
  //   username:"tamil-22",
  //   contact:"8838902931",
  //   email:"tamilzhan1922@gmail.com",
  //   role:"student",
  //   skills:["java basics","react"],
  //   location:"Hosur",
  //   about:"I am a Cricketer",
  //   projects:[{
  //     title:"project1",
  //     description:"project1 description" },
  //   {
  //     title:"project2",
  //     description:"project2 description"  },
  //   {
  //     title:"project3",
  //     description:"project3 description"}
  // ],
  //   social:{linkedin:"https://www.linkedin.com/in/tamilzhan-e-49b413338/"},
  //   accordion:[{}]
  // }]
  // return (
  //   <div>
  //   <h1>Hello,</h1>
  //   </div>
  // )
   const [name, setName] = useState(""); 
    const [role, setRole] = useState(""); 
    return ( 
    <div> 
    <center>
      <h1>My Portfolio</h1> 
      <h2>Enter Your Details</h2> 
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
      <input type="text" placeholder="Enter your role" value={role} onChange={(e) => setRole(e.target.value)} /> <br /><br /> 
      <h2>Welcome, {name}</h2> 
      <p>{role}</p> 
      </center>
      </div>
       );
}

export default Home_task
