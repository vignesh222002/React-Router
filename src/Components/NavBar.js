import { NavLink } from "react-router-dom"
import { useAuth } from "./Auth/Auth"

export default function NavBar() {
    let Auth = useAuth()
    const NavStyle = ({ isActive }) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

    return (
        <nav>
            <NavLink style={NavStyle} to='/'>Home</NavLink>
            <NavLink style={NavStyle} to='about'>About</NavLink>
            <NavLink style={NavStyle} to='product'>Product</NavLink>
            <NavLink style={NavStyle} to='profile'>Profile</NavLink>
            {!Auth.user && <NavLink style={NavStyle} to='login'>Login</NavLink> }
        </nav>
    )
}