import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import UserHomePage from './components/User/UserHomePage.jsx'
import AdminHomePage from './components/Admin/AdminHomePage.jsx'
import ServicesList from './components/Services/ServicesList.jsx'
import MeetingsList from './components/Meetings/MeetingsList.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <UserHomePage />,
        errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
    },
    {
        path: '/admin',
        element: <AdminHomePage />,
        errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>,
        children: [
            {
                path: 'services',
                element: <ServicesList />,
                errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
            },
            {
                path: 'meetings',
                element: <MeetingsList />,
                errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
            }
        ]
    }
])

export default router;