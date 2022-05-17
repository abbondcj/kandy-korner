import React from "react";
import { Route, Routes } from "react-router-dom";
import { EmployeeForm } from "./components/employees/EmployeeForm";
import { EmployeeList } from "./components/employees/EmployeeList";
import { LocationList } from "./components/locations/LocationList";
import { ProductList } from "./components/products/ProductList";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/employees" element={<EmployeeList />}/>

            <Route path="/locations" element={<LocationList />}/>

            <Route path="/products" element={<ProductList />}/>

            <Route path="/employee/create" element={<EmployeeForm />}/>
        </Routes>
    )
}