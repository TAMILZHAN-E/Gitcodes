import React, { useState } from 'react'

function Errorhandling({data}) {
    console.log(data)
    const[value,setvalue]=useState({
        name:"",
        email:"",
        mobile:""
    })
     const[error,seterror]=useState({
        nameError:"",
        emailError:"",
        mobileError:""
    })
    const change=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
         e.preventDefault();
         if(value.name==""){
            seterror({...error,nameError:"this field is required"})
        //   console.log("this field is required");
          }
        else if(value.name.length<3){
            seterror({...error, nameError:"the name should be of more than 3 charcters"})
            // alert("the name should be of more than 3 charcters")
        }
        else{
            seterror({...error, nameError:""})
        }
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
             <input type="text" placeholder="name" name="name" onChange={change}/><br/>
             <span style={{color:"red"}}>{error.nameError}</span> <br/>
             <input type="email" placeholder="email" name="email" onChange={change}/><br/><br/>
             <input type="number" placeholder="mobile" name="mobile" onChange={change}/><br/><br/>
             <button type='submit'>submit</button>
         </form>
    </div>
  )
}

export default Errorhandling
