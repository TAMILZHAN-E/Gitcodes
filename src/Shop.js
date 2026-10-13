import React, { useState } from 'react'

const Shop=()=> {
    const[products,setproducts]=useState({
        id:1,
        name:"wired headset",
        price:500,
        color:"red"},
        {
        id:1,
        name:"neckbands",
        price:1000,
        color:"red"},
        {
        id:1,
        name:"headset",
        price:700,
        color:"red"}
    )
    const[theme,settheme]=useState(0)

    const col=()=>{
        settheme(!theme)
    }

    const[open,setopen]=useState(false)
    
    const accor=[
        {id:1,title:"rules",para:"there are some rules to be followed"}
     ]
      const handleid=(id)=>{
        
        setopen(id)
        setopen(open === id ? null : id)}
    const[model,setmodel]=useState(false)
  return (
     <><center>
     <h1>shop items</h1>
    <center style={{background:(theme?"black":"white")}}></center> 
    <span style={{cursor:"pointer"}} onClick={col}>{theme?"🌛":"🔅"}</span>
       {
            accor.map((i)=>{
                return(
                    <>
                    <p  onClick={()=> handleid(i.id)}>{i.title}</p>
                    { open == i.id ? <p>{i.para}</p> : ""}
                    </>
                )
            })
        }
    { model ? <div >
        <span>Are u sure?</span><br/>
        <button  className='style'onClick={()=>{setmodel(false)}}>confirm</button>
        </div>:""} 
    <button onClick={()=>{setmodel(true)}}>X</button>
     </center>
     </>
  )
}
export default Shop
