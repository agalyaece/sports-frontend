import { useEffect, useState } from "react";
import classes from "./Add.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axios.js";
import toast from "react-hot-toast";

export default function UpdatePlayer() {
    const navigate = useNavigate();
    const { id } = useParams();
    const players = {
        name: "",
        runs: "",
        wickets: ""
    }
    const [player, setPlayer] = useState(players);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleUpdateInput = (event) => {
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: value })
    }

    useEffect(() => {
        axios.get(`/player/getOneplayer/${id}`)
            .then((response) => {
                setPlayer(response.data)
            })
            .catch((err) => console.log(err))
    }, [id])

    function handleUpdatePlayer(event) {
        event.preventDefault();
        setButtonDisabled(true);

        axios.put(`/player/updateplayer/${id}`, player)
            .then((response) => {
                setButtonDisabled(false);
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/player")

            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className={classes.addPlayer}>
            
            <h3>Update Player Details</h3>

            <form className={classes.addUserForm} onSubmit={handleUpdatePlayer}>
                <div className={classes.inputGroup}>
                    <label htmlFor="player_name">Player Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleUpdateInput}
                        value={player.name}
                        required />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="runs">Runs Scored</label>
                    <input
                        type="text"
                        name="runs"
                        onChange={handleUpdateInput}
                        value={player.runs}
                        required />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="wickets">Wickets Taken</label>
                    <input
                        type="text"
                        name="wickets"
                        onChange={handleUpdateInput}
                        value={player.wickets}
                        required />
                </div>
                <div className={classes.submitdiv}>
                <Link to={"/player"}  > 
                 <button className={classes.back} >Back</button> </Link>
                <button disabled={buttonDisabled} type="submit" >Update Player</button>
                </div>
            </form>
        </div>
    )
}

