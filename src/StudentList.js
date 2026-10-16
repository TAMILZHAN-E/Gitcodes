import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({students}) => {
  return (
    <div>
     
        <StudentCard student={students}/>
      
    </div>
  )
}

export default StudentList
