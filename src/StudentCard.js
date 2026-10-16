import React from 'react'


const StudentCard = ({student}) => {
  return (
    <>
    <center>
    <h2>Student Details🎓</h2><br/>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
           
               {student.map((student)=>{
        return(
            <>
            <tr>
        <td>{student.name}</td>
        <td>{student.username}</td>
        <td>{student.email}</td>
        </tr>
        </>
        )
    })}
          
        </tbody>
    
    </table>
       
    </center>
    </>
  )
}

export default StudentCard
