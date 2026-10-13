import {useState,React} from 'react'

function Spread() {
    // const students=[
    //     {id:1,name:"tamil",age:19,dept:"IT"},
    //     {id:2,name:"mani",age:18,dept:"CSE"},
    //     {id:3,name:"naveen",age:19,dept:"IT"},
    //     {id:4,name:"theni",age:20,dept:"AIDS"},
    //     {id:5,name:"sanjay",age:19,dept:"AIML"},
    //     {id:6,name:"vel",age:20,dept:"CSE"},
    //     {id:7,name:"kathir",age:19,dept:"AIDS"},
    //     {id:8,name:"rohan",age:21,dept:"ECE"},
    //     {id:9,name:"murgan",age:18,dept:"MBA"},
    //     {id:10,name:"varun",age:19,dept:"MCA"},
    // ]
    const cars={
        name:"audi",
        color:"blue",
        model:2020,
        groundclearence:"medium",
        rim:"carbon fiber",
        autopilot:"enabled"
    }
   const{name,color,...rem}=cars
  

   const upd={...cars,model:"2027"}
 console.log(upd)
  return (
    <div>
      
    </div>
  )
}

export default Spread
