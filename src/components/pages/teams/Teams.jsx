import classes from "./Teams.module.css";
import WomensTeam from "./WomensTeam.jsx";
import InternationalTeam from "./InternationalTeam.jsx";
import DomesticTeam from "./DomesticTeam.jsx";
import LeagueTeam from "./LeagueTeam.jsx";
import { useState } from "react";
export default function Teams() {


    const [active, setActive] = useState("international");

    return <>
        <div className={classes.containerschedule}>
            <div >
                <div> <h3 className={classes.line1}>Cricket Teams</h3></div>
                <div className={classes.cstopicid}>
                    <button className={classes.cstopic} onClick={() => setActive("international")}>International</button>
                    <button className={classes.cstopic} onClick={() => setActive("domestic")}>Domestic</button>
                    <button className={classes.cstopic} onClick={() => setActive("league")}>League</button>
                    <button className={classes.cstopic} onClick={() => setActive("women")}>Women</button>
                </div>
            </div>
            <div>
                {active === "women" && <WomensTeam />}
                {active === "domestic" && <DomesticTeam />}
                {active === "league" && <LeagueTeam />}
                {active === "international" && <InternationalTeam />}
            </div>
        </div>
    </>
}
