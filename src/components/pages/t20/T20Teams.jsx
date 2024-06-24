import { useEffect, useState } from 'react';
import axios from "../../../axios.js"
import TeamsCountry from './TeamsCountry';

function T20Teams() {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState();
    const [error, setError] = useState();
    async function fetchEvents() {
        setIsLoading(true);
        const response = await axios.get("/t20WorldCup/teams");
        console.log(response)
        setFetchedEvents(response);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            {!isLoading && fetchedEvents && <TeamsCountry events={fetchedEvents} />}
        </>
    );
}

export default T20Teams;