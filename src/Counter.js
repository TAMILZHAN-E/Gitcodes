import React, { useState ,useEffect} from 'react'

const Counter = () => {
    const[count,setcount]=useState(0)
    const[count1,setcount1]=useState(0)

//     useEffect(()=>{
//         // console.log("without dependency")
//         document.title="counter"
//     },[])
//       useEffect(()=>{
//         document.title=count
//         // console.log("with dependency")
//     },[count])
//       useEffect(()=>{
//         setcount(22)
//         // console.log("empty dependency")
//    })
    const btn={
        backgroundColor:"lavender",
        color:"black",
        padding:"10px",
        margin:"10px",
        borderRadius:"5px",
        cursor:"pointer"
    }
    const timeout=()=>{
        setTimeout(
            ()=>console.log("test"),1000
        )
    }
    const interval=()=>{
        setInterval(()=>{
            console.log("interval test")
        },1000)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button style={btn} onClick={()=>setcount(count+1)}>+</button>
      <button style={btn} onClick={()=>setcount(count-1)}>-</button>
      <button style={btn} onClick={()=>setcount(0)}>reset</button>
      <button style={btn} onClick={()=>setcount1(count1+1)}>count1</button>
      <button style={btn} onClick={interval}>time</button>
    </div>
  )
}

export default Counter
