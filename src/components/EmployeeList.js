import React from 'react'

export const EmployeeList = ({employees}) => {
  return (
    <div id="employees">
        {
            employees.map(
                (employee) => {
                    return <>
                        <div key={`employee--${employee.id}`}>
                            <p>Name: {employee.name}</p>
                            <p>Title: {employee.title}</p>
                            <p>Store ID: {employee.storeId}</p>
                        </div><br></br>
                    </>
                }
            )
        }
    </div>
  )
}

