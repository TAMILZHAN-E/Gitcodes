// // // // import Header from './Header';
// // // // import React, { useEffect, useState } from 'react';
// // // // import ObjectExample from './ObjectExample';
// // // // import UseEffectExample from './UseEffectExample';
// // // // import Project from './Project';
// // // // import Accordion from './Accordion';
// // // // import Modelbox from './Modelbox';
// // // // import Spread from './Spread';
// // // // import Task from './Task';
// // // // import Shop from './Shop';
// // // // import Sma from './Sma';
// // // // import Errorhandling from './Errorhandling';
// // // // import Product from './Product';
// // // // import Home from './Home';
// // // // import { Route,Link,Routes } from 'react-router-dom';
// // // // import adidas from './shoe.jpg'
// // // // import puma from  './puma.avif'
// // // // import nike from './nike.avif'
// // // // import s1 from './sock1.webp'
// // // // import s2 from './sock2.webp'
// // // // import s3 from './sock3.webp'
// // // // import Home_task from './Task/Home_task';
// // // // import Login_task from './Task/Login_task';
// // // // import Contact_task from './Task/Contact_task';
// // // // import Accordion_task from './Task/Accordion_task';
// // // // import Skills_task from './Task/Skills_task'
// // // // import Projects_task from './Task/Projects_task';
// // // // import About_task from './Task/About_task';
// // // // import Counter from './Counter';
// // // // import Login2 from './Login2';
// // // // import Getdata from './Getdata';
// // // // import Theme from './Theme';
// // // // import Assesment from './Assesment';
// // // // import axios from 'axios';
// // // // import Task2 from './Task2';
// // // // function App() {
// // // //   // const [data,setdata]=useState([])
// // // //   // useEffect (()=>{
// // // //   //   axios('http://localhost:4000/weather')
// // // //   //   .then(res=>setdata(res.data))
// // // //   // },[])
// // // //   const productObj = [{
// // // //     name: "Adidas",
// // // //     price: "3000",
// // // //     strikePrice: "5000",
// // // //     image:adidas

    
// // // //   },
// // // //   {
// // // //     name: "Puma",
// // // //     price: "2500",
// // // //     strikePrice: "3500",
// // // //     image:puma

// // // //   },
// // // //   {
// // // //     name: "Nike",
// // // //     price: "4000",
// // // //     strikePrice: "6000",
// // // //     image:nike

// // // //   }]
// // // //   const productSOCK = [{
// // // //     name: "Cotton SOCKS",
// // // //     price: "150",
// // // //     strikePrice: "200",
// // // //     image:s1

// // // //   },
// // // //   {
// // // //     name: "LINEN",
// // // //     price: "200",
// // // //     strikePrice: "250",
// // // //     image:s2

// // // //   },
// // // //   {
// // // //     name: "VELVET",
// // // //     price: "250",
// // // //     strikePrice: "280",
// // // //     image:s3

// // // //   }]
// // // //   return (
// // // //     <>
// // // //      {/* <Header/><br/> */}
// // // //      {/* <ObjectExample/> */}
// // // //      {/* { <UseEffectExample/>}  */}
// // // //      {/* <Project/> */}
// // // //      {/* <Accordion/> */}
// // // //      {/* <Modelbox/> */}
// // // //      {/* <Spread/> */}
// // // //      {/* <Task/>  */}
// // // //      {/* <Shop/> */}
// // // //      {/* <Sma/> */}
// // // //      {/* <Errorhandling data={obj}/> */}
// // // //      {/* <Product/> */}
// // // //      {/* <Login2/> */}
// // // //      {/* <center>
// // // //       <Link to='/'>Home</Link><br/>
// // // //       <Link to='/shoes'>shoes</Link><br/>
// // // //       <Link to='/socks'>Socks</Link>
// // // //       </center>
// // // //     <Routes>
// // // //         <Route path='/' element={<Home/>}/>
// // // //         <Route path='/shoes' element={<Product productObj={productObj}/>}/>
// // // //         <Route path='/socks' element={<Product productObj={productSOCK}/>}/>
// // // //       </Routes> */}
// // // //       {/* <header>
// // // //          <center>
// // // //       <Link to='/'>Home</Link>&nbsp;&nbsp;
// // // //       <Link to='/login'>Login</Link>&nbsp;&nbsp;
// // // //       <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
// // // //       <Link to='/accordion'>Accordion</Link>&nbsp;&nbsp;
// // // //       <Link to='/skills'>Skills</Link>&nbsp;&nbsp;
// // // //       <Link to='/projects'>Projects</Link>&nbsp;&nbsp;
// // // //       <Link to='/about'>About</Link>&nbsp;&nbsp;
// // // //       </center>
// // // //       </header>
// // // //       <Routes>
// // // //         <Route path='/' element={<Home_task/>}/>
// // // //         <Route path='/login' element={<Login_task/>}/>
// // // //         <Route path='/contact' element={<Contact_task/>}/>
// // // //         <Route path='/accordion' element={<Accordion_task/>}/>
// // // //         <Route path='/skills' element={<Skills_task/>}/>
// // // //         <Route path='/projects' element={<Projects_task/>}/>
// // // //         <Route path='/about' element={<About_task/>}/>
// // // //       </Routes>
// // // //       */}
// // // //       {/* <Counter/> */}
// // // //       {/* <Getdata/> */}
// // // //       {/* <Theme/> */}
// // // //       {/* <Assesment/> */}

// // // //       {/*this tis to test git hub push and pull */}
// // // //       {/* {data.map((i)=>{
// // // //         return(
// // // //         <>
// // // //         <p>{i.name}</p>
// // // //         <p>{i.city}</p>
// // // //         <p>{i.temp}</p>
// // // //         </>
// // // //         )
// // // //       })} */}
// // // //       <Task2/>
// // // //      </>
    
// // // //   )
// // // // }

// // // // export default App;

// // // // import React from 'react'
// // // // import TextField from '@mui/material/TextField'
// // // // import Paper from '@mui/material/Paper'
// // // // const App = () => {
// // // //   return (
// // //     // <div>
// // //     //   <Paper elevation={7} style={{width:"20%",textAlign:"center",padding:"7%",height:"40%",margin:"100px auto  "}}>
// // //     //      <div style={{display:"flex",flexDirection:"column",width:"100%",marginBottom:"100px",gap:"30px"}}>
// // //     //   <TextField variant='outlined' label="UserName" helperText="userName is required" required onChange={(e)=>{console.log(e.target.value)}}/>
// // //     //   <TextField variant='outlined' label="Password" helperText="must be more than 8 characters"required/>
// // //     //   <button variant="contained" >Submit</button>
// // //     //   </div>
// // //     //   </Paper>
// // //     // </div>
// // // //     
// // // import Button from '@mui/material/Button';
// // // import Switch from '@mui/material/Switch';
// // // import TextField from '@mui/material/TextField';
// // // import Paper from '@mui/material/Paper';
// // // import LockIcon from '@mui/icons-material/Lock';
// // // import Typography from '@mui/material/Typography'


// // // function App() {
// // //   return (
// // //     <div style={{marginLeft:'500px'}}>
// // //       <Paper style={{border:'2px solid black', width:'200px',height:'350px',padding:'20px'}}>
// // //       <h1>Login Page</h1>
// // //       <LockIcon sx={{color:'black',fontSize:40}}></LockIcon>
// // //       <Typography>Welcome Back !!!</Typography>
// // //       <TextField required  variant="outlined"  label="UserName"  type="Name" onChange={(e)=>console.log(e.target.value)}/><br/><br />
// // //       <TextField required variant="outlined" label ="Password" type="Password" onChange={(e)=>console.log(e)}/><br/><br/>
// // //       <Button variant={'contained'}>Sign Up</Button>
// // // </Paper>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // import React from "react";
// // import Parent from "./Parent";
// // import Paper from '@mui/material/Paper';

// // function App() {
// //   const student = {
// //     name: "Arun",
// //     department: "MERN Stack"
// //   };

// //   return (<>
// //   <div>
// //    <Paper elevation={6} style={{ width:"30%",
// //                                  marginLeft:"35%",
// //                                  textAlign:"center",
// //                                  marginTop:"10%",
// //                                  height:"24vh",
// //                                  paddingTop:"5px"}}>
// //           <Parent student={student} />
// //     </Paper>
// //   </div>
// //   </>
// //   )
// // }

// // export default App;

// import EmployeePage from "./EmployeePage";
// import Paper from '@mui/material/Paper';
// import Badge from '@mui/material/Badge';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import IconButton from '@mui/material/IconButton';
// function App() {
//   const employee = {
//     name: "Priya",
//     role: "Frontend Developer",
//     salary: 30000,
//     skills: ["React", "JavaScript", "CSS"]
//   };

//   return (
//     <>
//   <div>
//         <Paper elevation={8} style={{ width:"30%",
//                                  marginLeft:"35%",
//                                  textAlign:"center",
//                                  marginTop:"10%",
//                                   height:"47vh",
//                                   paddingTop:"5px",
//                                   backgroundColor:"lavender"}}>
//           <EmployeePage employee={employee} />
           
//         <Badge color="primary" badgeContent={5}>
//         <NotificationsIcon />
//       </Badge>
    
//     </Paper>
    
//    </div>
//   </>
//   )
// }

// export default App;
// import UserList from "./UserList";
// import Rating from '@mui/material/Rating';
// function App() {
//   return (
//     <div>
//       <h1>User Directory</h1>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//       <UserList />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import StudentList from "./StudentList";
import Paper from '@mui/material/Paper';

function App(){
    const [students,setstudents]=useState([])
    const [loading,setloading]=useState(true)
     useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      
      .then((res)=>{
        setstudents(res.data)
        
      })
      .finally(()=>{
        setloading(false)
      })
     },[])
  return(
    <>
    {
    loading?<p>Loading...</p>:   
                 <Paper elevation={6} style={{width:"55%",marginLeft:"23%",marginTop:"10%",paddingTop:"2%",height:"55vh",background:"linear-gradient(90deg,rgb(190 223 255),rgb(255 152 204))"}}>
                <StudentList students={students} />   
                 </Paper>
    
    }
    </>
  )
}
export default App;