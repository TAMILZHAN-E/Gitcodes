import React, { use } from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Task2.css'

const Task2 = () => {

     const [data,setData] = useState({
            username:"",
            password:""
        })
     const[value,setvalue]=useState({
            username:"",
            password:""
        })
   
       const change=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
    axios.get("https://dummyjson.com/c/e2d7-5698-4370-bbf7")
    .then(res=>setData(res.data))
   },[])
    const result=(e)=>{
        e.preventDefault()
       if(value.username===data.username && value.password===data.password)
        {
            alert("login successful")
        }
        else{
            alert("login failed")
        }
    }
    // console.log(value.username) 
    //  console.log(value.password)
  return (
    <div><center>
        <form >
            Username:<input type="name" placeholder='enter username' name="username"  onChange={change} /><br/>
            Password:<input type="password" placeholder='enter password' name="password" onChange={change} /><br/><br/>
            <button  onClick={result}>submit</button>
        </form>
      </center>
    </div>
  )
}

export default Task2
