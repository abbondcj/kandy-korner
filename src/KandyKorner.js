import React, { useState, useEffect} from "react"
import { EmployeeList } from "./components/EmployeeList.js"
import { LocationList } from "./components/LocationList.js"
import { ProductList } from "./components/ProductList.js"

export const KandyKorner = () => {
  const [employees, getEmployees] = useState([])
  const [locations, getLocations] = useState([])
  const [products, getProducts] = useState([])

  useEffect(
      () => {
          fetch("http://localhost:8088/employees")
              .then(res => res.json())
                  .then((data) => {
                      getEmployees(data)
                  })
      },
      [])
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
    useEffect(
      () => {
        fetch("http://localhost:8088/products?_sort=productTypeId&_order=asc&_expand=productType")
          .then(res => res.json())
            .then(
              (data) => {
                getProducts(data)
              }
            )
      },
      []
    )

    

  return (
    <>
      <h1>Kany Korner</h1>
      <h2>Employee List</h2>
      <EmployeeList employees={employees}/>
      <h2>Locations</h2>
      <LocationList locations={locations} />
      <h2>Products</h2>
      <ProductList products={products}/>
    </>
  )
}

