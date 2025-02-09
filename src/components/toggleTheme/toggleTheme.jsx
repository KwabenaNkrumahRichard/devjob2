import { useContext } from "react";
import classes from "./toggleTheme.module.css";
import JobContext from "../../context/jobContext";

function ToggleTheme(props) {
  const { changetheme } = useContext(JobContext);

  return (
    <div className={classes.container}>
      <div className={classes.light}>
        <img src="../../assets/desktop/icon-sun.svg" alt="img" />
      </div>
      <div className={classes.button}>
        <input type="checkbox" id="theme" className={classes.checkbox} />
        <label
          htmlFor="theme"
          className={classes.label}
          onClick={changetheme}
        ></label>
      </div>
      <div className={classes.dark}>
        <img src="../../assets/desktop/icon-moon.svg" alt="img" />
      </div>
    </div>
  );
}

export default ToggleTheme;
