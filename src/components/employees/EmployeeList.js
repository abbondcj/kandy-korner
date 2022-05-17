import React, { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, getEmployees] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                    .then((data) => {
                        getEmployees(data)
                    })
    },
    [])

  return (
    <>
        <button onClick={() => {navigate("/employee/create")}}>Create new employee</button>
        <div id="employees">
            {
                employees.map(
                    (employee) => { 
                        let hourlyRate = employee.hourlyRate.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })
                        return <>
                            <div key={`employee--${employee.id}`}>
                                <p>Name: {employee.name}</p>
                                <p>Manager: {employee.manager ? "Yes" : "No"}</p>
                                <p>Store: {employee.location.state}, {employee.location.city}</p>
                                <p>Employment: {employee.fullTime ? "Full time" : "Part time"}</p>
                                <p>Hour rate: {hourlyRate}</p>
                            </div><br></br>
                        </>
                    }
                )
            }
        </div>
    </>
  )
}

