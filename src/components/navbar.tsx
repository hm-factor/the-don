import React from "react"
import { Link } from "gatsby"

export default function Navbar() {

    return(
        <nav>
            <Link to="/music">music</Link>
            <Link to="/shows">shows</Link>
            <Link to="/contact">contact</Link>
        </nav>
    )
}