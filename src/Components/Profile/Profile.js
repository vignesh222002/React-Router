import { useNavigate } from "react-router-dom"
import { useAuth } from "../Auth/Auth"

export default function Profile() {
    let Auth = useAuth()
    let navigation = useNavigate()
    let handleLogout = () => {
        Auth.logout()
        navigation('/')
    }

    return (
        <>
            <div>Welcome {Auth.user}</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}