import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { allRoutes } from './route-config'

export const AppRoutes = () => {
    return (
        <Routes>
            {allRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}