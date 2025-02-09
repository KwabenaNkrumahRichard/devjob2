import { useContext } from "react";
import classes from "./doings.module.css";
import JobContext from "../../../context/jobContext";

function Doings(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <div className={lightTheme ? classes.light : classes.dark}>
      <h3 className={classes.h3}>What You Will Do</h3>
      <p className={classes.p}>{props.role.content}</p>
      <ol className={classes.ol}>
        {props.role.items.map((item, i) => (
          <li className={classes.li} key={i}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Doings;
