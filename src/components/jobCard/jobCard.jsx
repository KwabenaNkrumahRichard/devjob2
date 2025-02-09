import React, { useContext } from "react";

import classes from "./jobCard.module.css";
import JobContext from "../../context/jobContext";

function JobCard(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <div
      className={
        lightTheme
          ? `${classes.cardContainer} ${classes.light}`
          : `${classes.cardContainer} ${classes.dark}`
      }
    >
      <div
        className={classes.imgContainer}
        style={{ backgroundColor: props.logobackground }}
      >
        <img src={`../..${props.logo}`} alt="img" />
      </div>
      <p className={classes.description}>
        {props.postedDate} . {props.contract}
      </p>
      <h3
        className={
          lightTheme
            ? `${classes.jobType} ${classes.lighth3}`
            : `${classes.jobType} ${classes.darkh3}`
        }
      >
        {props.position}
      </h3>
      <p className={classes.description}>{props.company}</p>
      <h4 className={classes.country}>{props.country}</h4>
    </div>
  );
}

export default JobCard;
