import {React,useEffect,useState} from 'react'
import axios from 'axios'

const Getdata = () => {
    const [data,setData] = useState([])
   useEffect(()=>{
    axios.get("https://dummyjson.com/c/b808-e188-47f8-8ff9")
    .then(res=>setData(res.data))
   },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                       
                </tr>
            </thead>
        
      {data.map((i)=>{
        return(
           <>
           <tbody>
            <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
            </tr>
           </tbody>
           
           </>
        )
      })}
      </table>
    </div>
  )
}

export default Getdata
