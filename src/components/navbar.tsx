import React from "react"
import NavElement from "./navElement"
import {navbar} from '../styles/navbar.module.css'

export default function Navbar() {
    let navElements = [
        ['/music', 'MUSIC'],
        ['/shows', 'SHOWS'],
        ['/contact', 'CONTACT']
    ]

    return(
        <nav className={navbar}>
            {navElements.map( (el) => {
                return (
                    <NavElement url={el[0]} content={el[1]}/>
                )
            })}
        </nav>
    )
}