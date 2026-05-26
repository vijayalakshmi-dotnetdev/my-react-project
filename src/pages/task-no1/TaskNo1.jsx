import React, { useState } from "react";
import studentinfo from '../../assets/json/studentInfo.json';


export default function DemoPage5() {

  const [studentInfo, setStudentInfo] = useState(studentinfo)


  const addNewStudent = () => {
    
    let newStudent ={
      name:"karupusamy",
      age : 25,
      course: "react"
    }

    setStudentInfo(
      [
        ...studentInfo,
        newStudent
      ]
    );

  };

  const handleUpdate = (profileIndex) => {

    const updateInfo = studentInfo.map(

      (value, index) => {

        if (index == profileIndex) {
          value.name = "Taj"
          value.age = 22
          value.course = "vue Js"
        }

        return value
      }
    )

    setStudentInfo(updateInfo)

  }

  const handleDelete = (profileIndex) => {

    const afterDeleteRecord = studentInfo.filter((value, index) => index != profileIndex)
    setStudentInfo(afterDeleteRecord)

  }

  return (
    <div>
      <div className="employee-List">
        <h2>Student Information </h2>
        {
            studentInfo.length == 0 ? <p>No Student Record Found</p> :  

            (studentInfo.map((value, index) => {
            return (
                <React.Fragment key={index}>
                <p> Student Name : {value?.name} </p>
                <p> Student Age : {value?.age} </p>
                <p> Student course : {value?.course} </p>
                <button onClick={() => handleUpdate(index)}>update</button>
                <button onClick={() => handleDelete(index)}>delete</button>
                <hr />
                </React.Fragment>
            );
            }))
        }
      </div>
      <button onClick={ addNewStudent}> Add New Student </button>
    </div>
  );
}
