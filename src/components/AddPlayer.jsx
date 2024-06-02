import { useState } from "react";
import axios from "../axios.js";
import  "./AddPlayer.module.css";

function AddPlayer() {
    const [name, setName] = useState();
    const [runs, setRuns] = useState();
    const [wickets, setWickets] = useState();

    const addPlayer = (event) => {
        event.preventDefault();

        axios.post("/player/addplayer", { name, runs, wickets })
            .then(() => {
                setName("");
                setRuns(0);
                setWickets(0);
            })
            .catch((error) => alert(error.message))
    };


    return (
        <div><h3>AddPlayer</h3>
            <form>
                <label htmlFor="player_name">Player Name</label>
                <br />
                <input 
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    value={name} />
                <br />

                <label htmlFor="runs">Runs Scored</label><br />
                <input 
                    type="text"
                    onChange={(event) => setRuns(event.target.value)}
                    value={runs} />
                <br />
                <label htmlFor="wickets">Wickets Taken</label><br />
                <input 
                    type="text"
                    onChange={(event) => setWickets(event.target.value)}
                    value={wickets} />
                <br />
                <button type="submit" onClick={addPlayer}>Submit</button>
                <br />
            </form>
        </div>
    )
}

export default AddPlayer