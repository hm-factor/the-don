import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from '../styles/navbar.module.css'

export default function Navbar() {

    return(
        <nav className={navbarStyles.navbar}>
            <Link to="/music">music</Link>
            <Link to="/shows">shows</Link>
            <Link to="/contact">contact</Link>
        </nav>
    )
}