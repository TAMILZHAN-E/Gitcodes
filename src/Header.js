import {react,useState} from "react";
function Header(){
    const[value,setvalue]=useState(0)
    function increment(){
        setvalue(value + 1)
    }
    
    return(
        <>
        {value}<br/>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>{setvalue(value - 1)}}>decrement</button>
      </>
        
    )
}

export default Header;