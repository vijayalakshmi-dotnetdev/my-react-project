import { useState } from "react"
import employeeData from '../../assets/json/employeeData.json'

export default function DemoPage4() {


    const [employeeInfo, setEmployeeInfo] = useState(employeeData)
    
   

    return <div>
        <div>
            <h4> Employee Salary Update </h4>

            <div>
                <span><strong>Employee name : </strong></span>
                <span> {employeeInfo?.name} </span>
            </div>
            <div>
                 <div>
                    <span> <strong> Basic Salary:</strong> </span>  
                    <span> {employeeInfo.salary.basic} </span>
                 </div>
                 <div>
                    <span> <strong> HRA:</strong> </span>
                    <span> {employeeInfo.salary.hra} </span>
                 </div>
                 <div>
                    <span> <strong> PF:</strong> </span>
                    <span> {employeeInfo.salary.Pf} </span>
                 </div>
                <span> <button
                    onClick = {
                        () => setEmployeeInfo({
                            ...employeeInfo,
                            salary:{
                                ...employeeInfo.salary,
                                basic: employeeInfo.salary.basic +5000,
                                hra: employeeInfo.salary.hra + 2000,
                                Pf: employeeInfo.salary.Pf + 1000   
                            }
                        })
                    }
                
                > Update Salary </button></span>
            </div>
          
        </div>  
    </div>
}