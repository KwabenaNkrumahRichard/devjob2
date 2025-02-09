import { useContext } from "react";
import classes from "./requirement.module.css";
import JobContext from "../../../context/jobContext";

function Requirement(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <div className={lightTheme ? classes.light : classes.dark}>
      <h3 className={classes.h3}>Requiments</h3>
      <p className={classes.p}>{props.requirement.content}</p>
      <ul className={classes.ul}>
        {props.requirement.items.map((item, i) => (
          <li className={classes.li} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Requirement;
