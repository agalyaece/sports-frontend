/* eslint-disable react/no-unescaped-entities */


import classes from "./Player.module.css"

import axios from "../axios.js";
import { useEffect, useState } from "react";

export default function Player() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("/player");
            setPlayers(data);
        };
        fetchData();
    }, [])


    return <>
        <div>
            <table className={classes.players}>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Runs Scores</th>
                        <th>Wickets Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.data && players?.data.map(player => (
                            (<tr key={player.runs} >
                                <td>{player.name}</td>
                                <td>{player.runs}</td>
                                <td>{player.wickets}</td>

                            </tr>))
                        )
                    }
                </tbody>
            </table>

        </div>

    </>
}