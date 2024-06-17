import { useState } from "react";
import axios from "../../axios.js";
import classes from "./Add.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function AddPlayer() {

    const navigate = useNavigate();
   
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const players = {
        name: "",
        runs: "",
        wickets: "",
        matches: "",
    }
    const [player, setPlayer] = useState(players);

    const handleAddPlayer = (event) => {
        event.preventDefault();
        setButtonDisabled(true);

        axios.post("/player/addplayer", player)
            .then((response) => {
                setButtonDisabled(false);
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/player")

            })
            .catch((error) => alert(error.message))

       
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: value })
    }

    return (
        <div className={classes.addPlayer}>

            <h3>Add New Player</h3>

            <form onSubmit={handleAddPlayer} className={classes.addUserForm}>
                <div className={classes.inputGroup}>
                    <label htmlFor="player_name">Player Name</label>
                    <input
                        placeholder="Name of Player"
                        type="text"
                        name="name"
                        onChange={handleInput}
                        required />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="runs">Runs Scored</label>
                    <input
                        placeholder="Runs Scored"
                        type="text"
                        name="runs"
                        onChange={handleInput}
                        required />
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="wickets">Wickets Taken</label>
                    <input
                        placeholder="Wickets Taken"
                        type="text"
                        name="wickets"
                        onChange={handleInput}
                        required />
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="matches">Matches Played</label>
                    <input
                        placeholder="Matches Played"
                        type="text"
                        name="Matches Played"
                        onChange={handleInput}
                        required />
                </div>
                <div className={classes.submitdiv}>
                    <Link to={"/player"}  >
                        <button className={classes.back} >Back</button> </Link>
                    <button disabled={buttonDisabled} type="submit" >Add Player</button>
                </div>


            </form>
        </div>
    )
}

export default AddPlayer