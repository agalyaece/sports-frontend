import classes from "./Footer.module.css"

export default function Footer(){

    const year = new Date().getFullYear();
    return(
        <footer className={classes.footer}>
            <p>Copyright © JRD tech {year}</p>
        </footer>
    );
}