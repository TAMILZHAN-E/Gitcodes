import React from "react";

const ObjectExample=()=>{
    const student=[{
        id:1,
        name:"vijay",
        age:59,
        department:"CM",
        marks:95
    },
    {
        id:2,
        name:"arun",
        age:20,
        department:"CSE",
        marks:90
    }
]
const data=student.map((i)=>{
    return(
        <>
         <table>
            <thead>
                <th>name</th>
                <th>age</th>
                <th>mark</th>
            </thead>
            <tbody>
              <tr>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.marks}</td>
              </tr>
              <tr>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.marks}</td>
              </tr>
            </tbody>
        </table>
        </>
    )
})
    // const num=[1,2,3,4,5,6]

    // console.log(num.push(7),num)
    // console.log(num.pop,num)
    // console.log(num.unshift(0),num)
    // console.log(num.shift,num)

    const names=["tamil","mani","naveen","niranjan"]
    // console.log(names.slice(1,3))
    console.log(names.splice(0,1,"added"),names)

    const datamark=student.filter((i)=>i.marks>90)
    
    return(
        <>
        {/* <table>
            <thead>
                <th>name</th>
                <th>age</th>
                <th>mark</th>
            </thead>
            <tbody>
              <tr>
                <td>{student[0].name}</td>
                <td>{student[0].age}</td>
                <td>{student[0].marks}</td>
              </tr>
              <tr>
                <td>{student[1].name}</td>
                <td>{student[1].age}</td>
                <td>{student[1].marks}</td>
              </tr>
            </tbody>
        </table> */}
        {datamark.map((i)=>{
            return(
                <>
                {i.name}
                </>
            )
        })}
        </>
    )
}
export default ObjectExample