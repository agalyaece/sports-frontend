
import classes from "./Schedule.module.css"

import axios from "../../../axios.js"
import { useEffect, useState } from "react";

export default function T20Schedule() {
    const [schedule, setSchedule] = useState([]);

    async function fetchData() {
        const data = await axios.get("/schedule/t20")
        console.log(data)
        setSchedule(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return <>
        <div>
            {schedule.data && schedule?.data.map(schedules => (


                <div key={schedules._id}>
                    <div className={classes.dates}>{schedules.date}</div>
                    <div className={classes.tours}>
                        <div className={classes.tourhead}>{schedules.event_name} </div>
                        {(schedules.events).map(eventSchedules => (
                            <>
                                <div key={eventSchedules._id}>
                                    <div> {eventSchedules.name}
                                        <p className={classes.allp}>{eventSchedules.place}</p>

                                    </div>
                                </div>

                                <div >
                                    <div className={classes.time}>
                                        {(eventSchedules.time).split("GMT")[0]}
                                        <p className={classes.allp}>{eventSchedules.time}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>


            ))}

        </div>
    </>
}

