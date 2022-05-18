import React, { ReactNode } from "react"
import { Link } from 'gatsby'
import Navbar from '../components/navbar';
import * as layoutStyles from '../styles/layout.module.css'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}:LayoutProps) {

    return (
        <div className={layoutStyles.container}>
            <Link to="/" className={layoutStyles.header}>
                THE DON
            </Link >
            <div className="content">
                {children}
            </div>
            <Navbar/>
        </div>
    )    
}