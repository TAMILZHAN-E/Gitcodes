import {React,useState} from "react";
import './Accordion.css'

const Accordion=()=>{

     const[open,setopen]=useState(false)
     const accor=[
        {id:1,title:"accordion 1",para:"paragraph 1"},
        {id:2,title:"accordion 2",para:"paragraph 2"}
     ]

     const handleid=(id)=>{
        // console.log(id)
        setopen(id)
        setopen(open === id ? null : id)

     }
     
    return(
        <>
        {/* <p className="head" onClick={()=>{setopen(!open)}}>Accordion 1</p>
       {open ? <p>hi hello</p> : ""}    
        <p className="head" >Accordion 2</p>
        opens ? <p>good morning</p>   */}
        {
            accor.map((i)=>{
                return(
                    <>
                    <p className="head" onClick={()=> handleid(i.id)}>{i.title}</p>
                    { open == i.id ? <p>{i.para}</p> : ""}
                    </>
                )
            })
        }
        </>
    )
}

export default Accordion