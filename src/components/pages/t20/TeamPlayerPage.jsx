import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../../axios.js";
import classes from "./TeamPlayerPage.module.css"

function TeamPlayerPage() {

    const { country } = useParams()
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get(`/t20WorldCup/teams/${country}`)
            .then((response) => {
                setTeams(response.data)
                console.log(response.data)
            })
            .catch((err) => console.log(err))
    }, [country])
    return <>
        <div className={classes.container}>

            <h3>Players List</h3>

            <div className={classes.btnadd}>
                <Link to={"/t20WorldCup/teams"}><button className={classes.btngreen} >Back</button></Link>
            </div>

            <table className={classes.players}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Player Name</th>
                        <th>Runs Scored</th>
                        <th>Wickets Taken</th>
                    </tr>

                </thead>
                <tbody>
                    {teams.map((team) => (
                        <>
                            {(team.players).map((player, index) => (
                                <tr key={player._id}>
                                    <td>{index + 1}</td>
                                    <td>{player.name}</td>
                                    <td>{player.runs}</td>
                                    <td>{player.wickets}</td>

                                </tr>
                            ))}
                        </>

                    ))}
                </tbody>
            </table>
        </div>
    </>
}


export default TeamPlayerPage;