import React, { ReactNode } from "react"
// import type { PageProps } from "gatsby"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}:LayoutProps) {

    return (
        <div className="layout">
            <div>navbar</div>
            <div className="content">
                {children}
            </div>
            <div>footer</div>
        </div>
    )    
}