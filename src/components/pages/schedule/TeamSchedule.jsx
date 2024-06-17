
import InternationalSchedule from "./InternationalSchedule";
import classes from "./Schedule.module.css"
import { useState } from "react"
import T20Schedule from "./T20Schedule";
import WomenSchedule from "./WomensSchedule";


export default function TeamSchedule() {

    const [active, setActive] = useState("international");


    return <>
        <div className={classes.containerschedule}>
            <div>
                <div><h1 className={classes.line1}>Cricket Schedule</h1></div>
                <div className={classes.cstopicid}>
                    <button onClick={() => setActive("international")}><div className={classes.cstopic}>International</div></button>
                    <button onClick={() => setActive("t20")}><div className={classes.cstopic}>T20 Leagues</div></button>
                    <button onClick={() => setActive("women")}><div className={classes.cstopic}>Women</div></button>

                </div>
            </div>

            <div>
                {active === "international" && <InternationalSchedule/>}
                {active === "t20" && <T20Schedule/>}
                {active === "women" && <WomenSchedule />}
                
            </div>
        </div>
    </>
}
