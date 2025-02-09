import { useContext } from "react";
import Button from "../../button/button";
import classes from "./descriptionHeader.module.css";
import JobContext from "../../../context/jobContext";

function DescriptionHeader(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <>
      <div
        className={
          lightTheme
            ? `${classes.container} ${classes.light}`
            : `${classes.container} ${classes.dark}`
        }
      >
        <div className={classes.details}>
          <p className={classes.p}>
            {props.postedDate} . {props.contract}
          </p>
          <h3 className={classes.h3}>{props.position}</h3>
          <h4 className={classes.h4}>{props.location}</h4>
        </div>
        <Button className={classes.button}>Apply Now</Button>
      </div>
      <p className={classes.p2}>{props.description}</p>
    </>
  );
}

export default DescriptionHeader;
