import React from "react";
import { Link } from "gatsby"
import {active} from '../styles/navbar.module.css'

interface LinkProps {
    url: string;
    content: string;
}

export default function NavElement({url, content}:LinkProps) {

    return (
        <Link to={url} activeClassName={active}>
            {content}
        </Link>
    )
}