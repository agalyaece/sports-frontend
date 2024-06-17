import axios from "../../../axios.js";
import { useEffect, useState } from "react"
import classes from "./Teams.module.css";

export default function DomesticTeam() {
    const [teamsData, setTeams] = useState([]);

    async function fetchData() {
        const data = await axios.get("/teams/domestic")
        console.log(data)
        setTeams(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return <>
        <div className={classes.tours} >
            {teamsData.data && teamsData?.data.map((team) => {
                return <>
                    <div key={team._id} className={classes.cardgroup}>
                        <img src={team.link} alt={team.title} />
                        <div className={classes.cardbody}>
                            <p>{team.title}</p>
                        </div>
                    </div>
                </>
            } )}
        </div >
    </>
}