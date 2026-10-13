import {React,useState}from 'react'

const Sma=()=> {
    const [count,setCount]=useState(0)
    const[theme,settheme]=useState(false)
    const[value,setvalue]=useState(0)
    const[model,setmodel]=useState(false)
    const accor=[
        {id:1,title:"What is React?",para:"React is a javascript library"}
    ]
    const [student,setstudent]=useState({
        name:"",
        age:0,
        course:""
    })
   const change=(e)=>{
    e.preventDefault()
    setstudent({...student,[e.target.name]:e.target.value})
   }
   const inc=(e)=>{
    setCount(count+1)
    e.preventDefault()
   }
   const dec=(e)=>{
    setCount(count-1)
    e.preventDefault()
   }
//   const toggle=()=>{
//     settheme(!theme)
//   }
  const handle=(id)=>{
    setvalue(id)
    setvalue(value===id?null:id)
  }
  return (
    <div>
      <center>
      <form>
        Name<input onChange={change} name={"name"}/><br/>
        Age<input onChange={change} name={"age"}/><br/>
        Course<input onChange={change} name={"course"}/><br/>
        {student.name}<br/>
        {student.age}<br/>
        {student.course}<br/>
        {count}<br/>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <div>
            <p style={{background:(theme?"white":"black")}}/>
            <p onClick={()=>settheme(!theme)}>{theme?"🔅":"🌛"}</p>
        </div>
      </form>
      { 
        accor.map((e)=>{
            return(
                <div>
                    <h1 onClick={()=>handle(e.id)}>{e.title}</h1>
                    { value==e.id?<p onClick={()=>setvalue(false)}>{e.para}</p>:""}
                </div>
            )
        })
      }
      
      {model ? <div><p>Are you sure?</p><button onClick={()=>setmodel(false)}>yes</button></div>:""}
      <button onClick={()=>setmodel(true)}>Delete</button></center>
    </div>
  )
}

export default Sma
