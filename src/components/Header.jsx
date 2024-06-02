import { Link } from "react-router-dom";
import classes from  "./Header.module.css"


export default function Header(){
    return(
        <Link to="/">
        <h1 className={classes.h1}>Cricketer&apos;s Peformance Analyzer</h1>
        </Link>
        
    );
}