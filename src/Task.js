import React from 'react'
import image from './bgrmv.png'
import './Task.css'

function Task() {
  return (
    <><div >
      <div className='cancel'>X</div>
       <div className='banner'>
        <br/><br/>
        <img src={image} className='img'/>
        <h2>Secure all your devices</h2>
        <p>Ensure your mobile phone,laptop and other devices are protected online.</p><br/>
        <span className='but'>Purchase Premium</span>
       </div>

    </div>
    </>
  )
}

export default Task
