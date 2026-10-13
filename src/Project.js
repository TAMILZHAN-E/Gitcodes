import {React,useState } from "react";
import './Project.css';

const Project=()=>{
    const[value,setvalue]=useState(0)
    const[input,setinput]=useState("")
    const[email,setemail]=useState("")
    const[age,setage]=useState(0)

    const[form,setform]=useState({
      id:0,
      name:"",
      email:"",
      age:0
    }
    )
    const[student,setstudent]=useState({
      id:1,
      name:"tamil",
      email:"tamil@gmail.com",
      age:21
    })
     const change=(e)=>{
      setstudent({...student,
        [e.target.name]:e.target.value})
     }
    
     const submit=(e)=>{
         e.preventDefault();
         setform({...form,
          name:student.name,
          age:student.age,
          email:student.email})
         
     }
     
    // const inc=()=>{
    //     // if(value==0){
    //     //     setvalue(1)
    //     // }
    //     // else{
    //     //     setvalue(0)
    //     // }
    //     setvalue(!value)
    // }
    //   const getdata=(event)=>{
    //     setinput(event.target.value)
    //   }
    //   const handleemail=(e)=>{
    //      setemail(e.target.value)
    //    }
    //   const ages=(e)=>{
    //         setage(e.target.value)
    //   }
    //    const handlesubmit=(event)=>{
    //     event.preventDefault();
    //     alert(input+" "+email+" "+age)
        
      // }
      
    return(
      // <div>
      //   <center style={{background:(value?"yellow":"black"),height:"100vh"}}>
      //       {value}<br/>
      //   <span style={{cursor:"grab"}} onClick={inc}>{value?"🌛":"🔅"}</span>
      //   </center>
      //   </div>
       <div style={{background:(value ? "grey":"white"),height:"100vh"}}><br/>
        {form.name}<br/>
        
        {form.email}<br/>
        {form.age}<br/>
        <form onSubmit={submit} >
        Name:<input onChange={change} name={"name"}/><br/>
        Email:<input onChange={change} name={"email"}/><br/>
        Age:<input onChange={change} name={"age"}/><br/>
        <button type="submit" >Submit</button>
        </form>
        </div>
    )
}

export default Project