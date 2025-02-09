import { useContext } from "react";
import classes from "./jobBanner.module.css";
import JobContext from "../../../context/jobContext";

function JobBanner(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <div
      className={
        lightTheme
          ? `${classes.container} ${classes.light}`
          : `${classes.container} ${classes.dark}`
      }
    >
      <div
        className={classes.companyLogo}
        style={{ backgroundColor: props.logoBackground }}
      >
        <img src={`../../${props.logo}`} alt="" />
      </div>

      <div className={classes.companyName}>
        <h2>{props.company}</h2>
        <p className={classes.p}>{props.website}</p>
      </div>

      <div className={classes.companyWeb}>
        <a href={`${props.apply}`} target="_blank">
          Company Site
        </a>
      </div>
    </div>
  );
}

export default JobBanner;
