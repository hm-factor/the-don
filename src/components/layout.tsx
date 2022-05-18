import React, { ReactNode } from "react"
import Navbar from '../components/navbar';

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}:LayoutProps) {

    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <div>footer</div>
        </div>
    )    
}