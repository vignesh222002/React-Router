import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"

export let Login = () => {
    let [user, setUser] = useState('')
    let Auth = useAuth()
    let navigate = useNavigate()
    let location = useLocation()
    // console.log(location);
    let redirectedPath = location.state?.path || '/'

    let handleLogin = () => {
        Auth.login(user)
        navigate(redirectedPath, {replace: true})
    }

    return (
        <>
            <label>
                User Name : <input type="text" onChange={e => setUser(e.target.value)}></input>
            </label>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}