import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./Auth"

let RequireAuth = ({children}) => {
    let Auth = useAuth()
    let location = useLocation()
    // console.log(location);

    if (!Auth.user) {
        return <Navigate to="/login" state={{path : location.pathname}} />
    }

    return children
}

export default RequireAuth