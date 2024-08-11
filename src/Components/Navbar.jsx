import React from "react"
import './Navbar.css'
import{Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className="navbar-logo">NGO-OperationBase</div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;