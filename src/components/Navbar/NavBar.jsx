import { NavLink } from "react-router-dom";


import classes from "./Navbar.module.css"
import { useState } from "react";



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={classes.navbar}>
            <div className={classes.menu} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? `${classes.open}` : undefined}>
                <li>
                    <NavLink to="/player">Players</NavLink>
                </li>
                <li>
                    <NavLink to="/teams">Teams</NavLink>
                </li>
                
                <li>
                    <NavLink to="/schedule">Schedule</NavLink>
                </li>
               
            </ul>
        </nav>
    );
}

