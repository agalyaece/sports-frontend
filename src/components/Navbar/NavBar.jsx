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

            <ul className={ menuOpen ? `${classes.open}` : undefined}>
                <li>
                    <NavLink to="/player" className={({isActive}) => isActive? classes.active : undefined }>Players</NavLink>
                </li>
                <li>
                    <NavLink to="/teams" className={({isActive}) => isActive? classes.active : undefined }>Teams</NavLink>
                </li>
                
                <li>
                    <NavLink to="/schedule" className={({isActive}) => isActive? classes.active : undefined }>Tournaments</NavLink>
                </li>

                <li>
                    <NavLink to="/t20WorldCup/teams" className={({isActive}) => isActive? classes.active : undefined }>T20 World Cup 2024</NavLink>
                </li>
               
            </ul>
        </nav>
    );
}

