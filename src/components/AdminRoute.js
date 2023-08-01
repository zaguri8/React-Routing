

// HOC - High order component

import { Navigate } from "react-router"
import { isAdmin } from "../App"


export default function AdminRoute(Component) {

    return function () {
        if (!isAdmin) {
            alert("Only admins are allowed to view this page!")
            return <Navigate to="/home" />
        }

        return <Component />
    }
}