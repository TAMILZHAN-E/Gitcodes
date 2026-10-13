import React, { useState } from 'react'
import './Assesment.css'

const Assesment = () => {
    const[value,setvalue]=useState("")
    const [darkMode, setDarkMode] = useState(false)
    const[num,setnum]=useState(0)
    const count=(e)=>{
        setvalue(e.target.value)
    }
    const number=()=>{
        let n=1
        setnum(n*10+num%9+num+1)
    }
  return (
    <>
        <center>
         <div style={{ background: darkMode ? 'black' : 'linear-gradient(70deg,#0e79e1,#d30a6f)', color: darkMode ? 'linear-gradient(90deg,#0e79e1,#d30a6f)' : 'black', height: '100vh' }}>
      <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button><br/><br/>
      <h2>Character Counter🔢</h2>
      <input type="text" placeholder='enter characters' onChange={count} className='in'/><br/>
      <h4>Count of Character:{value.length}</h4>
      <h2>Number Generator꩜</h2>
     <button onClick={number}>generate</button><br/>
     {num}
    </div>
    </center>
    </>
  )
}

export default Assesment
