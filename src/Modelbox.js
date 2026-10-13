import {React,useState } from 'react'
import './Model.css'

function Modelbox() {
    const[model,setmodel]=useState(false)
  return (
    <><center>
    <div>ModelBox</div>

    { model ? <div className='model'>
        <span>Are you sure want to continue ?</span><br/>
        <button  className='style'onClick={()=>{setmodel(false)}}>Ok</button>
        </div>:""} 
    <button onClick={()=>{setmodel(true)}}>Confirm</button>
    </center>
    </>
  )
}

export default Modelbox
