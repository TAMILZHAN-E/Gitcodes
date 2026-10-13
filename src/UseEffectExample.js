import {react,useState} from "react";
 const UseEffectExample=()=>{
  const[value,setvalue]=useState(0)
   const increment=()=>{
    return(
        setvalue(value+1)
    )
}
return(
    <>{value}<br/>
    <button onClick={increment}>Add</button>
    <button onClick={()=>setvalue(value-1)}>sub</button>
    </>
)
 }
export default UseEffectExample