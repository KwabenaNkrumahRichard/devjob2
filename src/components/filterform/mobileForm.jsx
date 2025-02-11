import { useContext, useRef } from "react";
import classes from "./mobileForm.module.css";
import JobContext from "../../context/jobContext";
import Button from "../button/button";

function MobileForm(props) {
  const { lightTheme } = useContext(JobContext);

  const locationRef = useRef("");
  const checkBoxRef = useRef("");

  return (
    <form
      onSubmit={props.onSubmit}
      className={
        lightTheme
          ? `${classes.form} ${classes.light}`
          : `${classes.form} ${classes.dark}`
      }
    >
      <div className={`${classes.inputContainer}`}>
        <label htmlFor="location" className={classes.label}>
          <img src="../../assets/desktop/icon-location.svg" alt="" />
        </label>
        <input
          type="search"
          placeholder="filter by location..."
          id="location"
          className={classes.inputfield}
          ref={locationRef}
          onChange={props.onInput.bind({ locationRef, checkBoxRef })}
        />
      </div>

      <div className={`${classes.inputContainer} ${classes.displayNone}`}>
        <input
          type="checkbox"
          id="full-time"
          className={classes.uncheck}
          ref={checkBoxRef}
          onChange={props.onInput.bind({ locationRef, checkBoxRef })}
        />
        <label htmlFor="full-time" className={classes.checkbox}></label>
        <label htmlFor="full-time" className={classes.fullTime}>
          Full-Time
        </label>
        <Button type="submit" className={classes.button}>
          Search
        </Button>
      </div>
    </form>
  );
}

export default MobileForm;
