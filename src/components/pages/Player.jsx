/* eslint-disable react/no-unescaped-entities */

import classes from "./Player.module.css"

import {Link} from "react-router-dom"

import axios from "../../axios.js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Player() {

    const [players, setPlayers] = useState([]);
    const fetchData = async () => {
        const data = await axios.get("/player");
        setPlayers(data);
    };
    useEffect(() => {
      
        fetchData();
    }, [])


    async function handleDelete(id) {
        const isConfirmed = window.confirm("Are you sure to delete this player? ");
        if (isConfirmed) {
           await axios.delete(`/deleteplayer/${id}`)
           
          .then(res => {
            setPlayers(res.data)
            toast.success(res.data.msg, {position: "top-right"})
        })
          .catch(err => console.log(err))  
    }
    fetchData();
}

    return <>
        <div className={classes.container}>
            <h4>Player analyzer</h4>
            <div className={classes.btnadd}>
               <Link to={"/player/addplayer"}><button className={classes.btngreen} >Add Player</button></Link> 
            </div>
            <table className={classes.players}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Player Name</th>
                        <th>Runs Scored</th>
                        <th>Wickets Taken</th>
                        <th>Matches Played</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {players.data && players?.data.map((player,index) => {
                        return (<tr key={index} >
                            <td>{index+1}</td>
                            <td>{player.name}</td>
                            <td>{player.runs}</td>
                            <td>{player.wickets}</td>
                            <td>{player.matches}</td>
                            <td> <Link to={`/player/updateplayer/${player._id}`} ><button className={classes.btngreen} >Edit</button></Link></td>
                            <td><button className={classes.btnred} onClick={() => handleDelete(player._id)}>Delete</button></td>

                        </tr>)
                    }
                    )
                    }
                </tbody>
            </table>

        </div>

    </>
}