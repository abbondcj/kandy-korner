import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const EmployeeForm = () => {
    const navigate = useNavigate()
    const [locations, getLocations] = useState([])
    const [employee, setEmployee] = useState({
        "name": null,
        "title": null,
        "locationId": null,
        "fullTime": null,
        "hourlyRate": null
    })
    
    const saveEmployee = (event) => {
        event.preventDefault()
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(employee)
        }
        fetch("http://localhost:8088/employees", fetchOption)
        navigate("/employees")
    }

    useEffect(
      () => {
        fetch("http://localhost:8088/locations")
          .then(res => res.json())
            .then(
              (data) => {
                getLocations(data)
              }
            )
      },
      []
    )

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee full name </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee name"
                        onChange={(event) => {
                            employee.name = event.target.value
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Employee store </label>
                    <select>
                        <option>Select a location</option>
                        {locations.map((location) => {
                            return <option value={location.id}>{location.state}, {location.city}</option>
                        })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <p>Position </p>
                    <input group="positionStatus" type="radio" value={true} /> Manager
                    <input group="positionStatus" type="radio" value={false} /> Non-manager
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <p>Employment Status </p>
                    <input group="employmentStatus" type="radio" value={true} /> Full time
                    <input group="employmentStatus" type="radio" value={false} /> Part time
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly rate </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Hourly rate"
                        onChange={(event) => {
                            employee.hourlyRate = parseFloat(event.target.value)
                        }} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Employee
            </button>
        </form>
    )
  
}

