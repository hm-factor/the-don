import React from "react"
import { Link } from "gatsby"
import * as navbarStyles from '../styles/navbar.module.css'

export default function Navbar() {

    return(
        <nav className={navbarStyles.navbar}>
            <Link to="/music" activeClassName={navbarStyles.active}>music</Link>
            <Link to="/shows" activeClassName={navbarStyles.active}>shows</Link>
            <Link to="/contact" activeClassName={navbarStyles.active}>contact</Link>
        </nav>
    )
}