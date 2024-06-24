
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./TeamsCountry.module.css";

function TeamsCountry({ events }) {
  return <>

    <div className={classes.containerschedule}>
      <h2>T20 World Cup 2024 - Teams</h2>
      <div className={classes.tours}>

        {events.data && events?.data.map((event) => (
          <div key={event._id}  >

            <Link to={`/t20WorldCup/teams/${event.team}`} >
              <div className={classes.cardgroup}>
                <img src={event.image} alt={event.title} />
                <div className={classes.cardbody}>
                  <p>{event.team}</p>
                </div>
              </div>

            </Link>

          </div>
        ))}

      </div >
    </div >






  </>
}

TeamsCountry.propTypes = {
  image: PropTypes.string,
  team: PropTypes.string
};

export default TeamsCountry