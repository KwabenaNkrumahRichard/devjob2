import { useContext } from "react";
import Button from "../../button/button";

import classes from "./footer.module.css";
import JobContext from "../../../context/jobContext";

function Footer(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <footer
      className={
        lightTheme
          ? `${classes.footer} ${classes.light}`
          : `${classes.footer} ${classes.dark}`
      }
    >
      <div className={classes.jobTitle}>
        <h6>{props.position}</h6>
        <p>{props.company}</p>
      </div>
      <Button>Apply Now</Button>
    </footer>
  );
}

export default Footer;
