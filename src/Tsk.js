import {React,useState,useEffect} from 'react'
import axios from 'axios';

const Login_task1 = () => {
  const [name,setname]=useState("");
  const[pass,setpass]=useState("");
  const [data,setdata]=useState([]);

  function changename(e){
    setname(e.target.value)
  }
  function changepass (e){
    setpass(e.target.value)
  }
  useEffect(()=>{
    axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
    .then((res)=>{setdata(res.data)})
  })
  function check(e){
    e.preventDefault();
    if(name===data.username && pass===data.password){
      alert("you did it")
    }
    else{
      alert("password mismatch")
    }
  }
  return (
    // <div className='logindata'>
    //   <h1>welcome to login page</h1>
    //   <form className='login'>
    //     E Mail : <input type='email' placeholder='E-Mail'></input><br/>
    //     Password : <input type='password' placeholder='Password'></input><br/>
    //     Mobile : <input type='number' placeholder='Mobile'></input><br/>
    //     <button className='loginbutton'>Confirm</button>
    //   </form>
    // </div>
    <>
<h1>Login Page</h1>
    
    <form>
      Name:<input onChange={changename}></input><br/>
      Password:<input onChange={changepass}></input><br/>
      <button onClick={check}>confirm</button>
    </form>

    
    </>
  )
}

export default Login_task1