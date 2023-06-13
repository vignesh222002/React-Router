import React, { useContext, useState } from "react"

let AuthContext = React.createContext(null)

export let AuthProvider = ({children}) => {
    let [user, setUser] = useState(null)

    let login = (user) => {
        setUser(user)
    } 
    let logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={ {user, login, logout} } >
            {children}
        </AuthContext.Provider>
    )
}

export let useAuth = () => {
    return useContext(AuthContext)
}