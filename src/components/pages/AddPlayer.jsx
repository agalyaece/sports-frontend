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
    // const [errors, setErrors] = useState({})

    const handleAddPlayer = (event) => {
        event.preventDefault();

        // const validationErrors = {}

        // if (!FormData.name) {
        //     validationErrors.name = "Name is Required!"
        // } else if (! /^[a-zA-Z]*$/.test(FormData.name)) {
        //     validationErrors.name = "Name is not Valid!"
        // }
        // if (!FormData.runs) {
        //     validationErrors.runs = "Runs is Required!"
        // } else if (FormData.runs != /^[0-9\b]+$/) {
        //     FormData.runs.replace(/\D/g, "")
        //     validationErrors.runs = "Runs not Valid!"
        // }

        // if (!FormData.wickets) {
        //     validationErrors.wickets = "wickets is Required!"
        // } else if (! /^[0-9\b]+$/.test(FormData.wickets)) {
        //     validationErrors.wickets = "wickets not Valid!"
        // }

        // if (!FormData.MatchesPlayed) {
        //     validationErrors.MatchesPlayed = "Matches Played is Required!"
        // } else if (! /^[0-9\b]+$/.test(FormData.MatchesPlayed)) {
        //     validationErrors.MatchesPlayed = "Matches Played is not Valid! enter number input"
        // }

        // setErrors(validationErrors)

        // if (Object.keys(validationErrors).length === 0) {
        setButtonDisabled(true);

        axios.post("/player/addplayer", player)
            .then((response) => {
                setButtonDisabled(false);
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/player")

            })
            .catch((error) => alert(error.message))

        // }
    }



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
                        required
                    />
                    {/* {errors.name && <span>{errors.name}</span>} */}
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="runs">Runs Scored</label>
                    <input
                        placeholder="Runs Scored"
                        type="number"
                        pattern="^[0-9\b]+$"
                        min={0} step={1}
                        autoComplete="off"
                        name="runs"
                        onChange={handleInput}
                        required
                    />
                    {/* {errors.runs && <span>{errors.runs}</span>} */}
                </div>

                <div className={classes.inputGroup}>
                    <label htmlFor="wickets">Wickets Taken</label>
                    <input
                        placeholder="Wickets Taken"
                        type="number"
                        name="wickets"
                        pattern="^[0-9\b]+$"
                        min={0} step={1}
                        autoComplete="off"
                        onChange={handleInput}
                        required
                    />
                    {/* {errors.wickets && <span>{errors.wickets}</span>} */}
                </div>
                <div className={classes.inputGroup}>
                    <label htmlFor="matches">Matches Played</label>
                    <input
                        placeholder="Matches Played"
                        type="number"
                        name="matches"
                        pattern="^[0-9\b]+$"
                        min={0} step={1}
                        autoComplete="off"
                        onChange={handleInput}
                        required
                    />
                    {/* {errors.MatchesPlayed && <span>{errors.MatchesPlayed}</span>} */}
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