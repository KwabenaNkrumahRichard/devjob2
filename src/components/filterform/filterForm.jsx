import classes from "./filterform.module.css";

import Button from "../button/button";
import { useContext, useRef, useState } from "react";
import JobContext from "../../context/jobContext";
import MobileForm from "./mobileForm";
import Overlay from "../overlay/overlay";

function FilterForm(props) {
  const { data } = useContext(JobContext);

  const titleRef = useRef("");
  const locationRef = useRef("");
  const checkBoxRef = useRef("");

  const { lightTheme } = useContext(JobContext);
  const [filterIsVissible, setFilterIsVissibe] = useState(false);

  const openOrCloseForm = () => {
    setFilterIsVissibe((prev) => !prev);
  };

  function submitForm(e) {
    e.preventDefault();
    setFilterIsVissibe(false);
  }

  const filterJobFunc = function () {
    const {
      titleRef: userTitle,
      locationRef: userLocation,
      checkBoxRef: fullTime,
    } = this;

    const title = userTitle?.current.value || null;
    const location = userLocation.current.value;
    const fullTimeChecked = fullTime.current.checked;
    let filteredJob;

    if (title && !location && !fullTimeChecked) {
      filteredJob = data.filter((item) =>
        item.position.toLowerCase().includes(title.toLowerCase())
      );
      props.setJobData(filteredJob);
    } else if (!title && location && !fullTimeChecked) {
      filteredJob = data.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
      props.setJobData(filteredJob);
    } else if (!title && !location && fullTimeChecked) {
      filteredJob = data.filter((item) => item.contract === "Full Time");
      props.setJobData(filteredJob);
    } else if (title && location && !fullTimeChecked) {
      filteredJob = data.filter(
        (item) =>
          item.position.toLowerCase().includes(title.toLowerCase()) &&
          item.location.toLowerCase().includes(location.toLowerCase())
      );
      props.setJobData(filteredJob);
    } else if (title && !location && fullTimeChecked) {
      filteredJob = data.filter(
        (item) =>
          item.position.toLowerCase().includes(title.toLowerCase()) &&
          item.contract === "Full Time"
      );
      props.setJobData(filteredJob);
    } else if (!title && location && fullTimeChecked) {
      filteredJob = data.filter(
        (item) =>
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.contract === "Full Time"
      );
      props.setJobData(filteredJob);
    } else if (title && location && fullTimeChecked) {
      filteredJob = data.filter(
        (item) =>
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.contract === "Full Time" &&
          item.position.toLowerCase().includes(title.toLowerCase())
      );
      props.setJobData(filteredJob);
    } else {
      filteredJob = data;
      props.setJobData(filteredJob);
    }
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className={
          lightTheme
            ? `${classes.form} ${classes.light}`
            : `${classes.form} ${classes.dark}`
        }
      >
        <div className={`${classes.inputContainer}`}>
          <label
            htmlFor="title"
            className={`${classes.label} ${classes.searchIcon}`}
          >
            <img src="../../assets/desktop/icon-search.svg" alt="" />
          </label>
          <input
            className={classes.inputfield}
            type="search"
            placeholder="Filter by title..."
            id="title"
            ref={titleRef}
            onChange={filterJobFunc.bind({
              titleRef,
              locationRef,
              checkBoxRef,
            })}
          />
          <label
            htmlFor="title"
            className={`${classes.filterIcon}`}
            onClick={openOrCloseForm}
          >
            <img src="../../assets/mobile/icon-filter.svg" alt="" />
          </label>
        </div>

        <div className={`${classes.inputContainer} ${classes.displayNone}`}>
          <label htmlFor="location" className={classes.label}>
            <img src="../../assets/desktop/icon-location.svg" alt="" />
          </label>
          <input
            type="search"
            placeholder="filter by location..."
            id="location"
            className={classes.inputfield}
            ref={locationRef}
            onChange={filterJobFunc.bind({
              titleRef,
              locationRef,
              checkBoxRef,
            })}
          />
        </div>

        <div className={`${classes.inputContainer} ${classes.displayNone}`}>
          <input
            type="checkbox"
            id="full-time"
            className={classes.uncheck}
            ref={checkBoxRef}
            onChange={filterJobFunc.bind({
              titleRef,
              locationRef,
              checkBoxRef,
            })}
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
      {filterIsVissible && (
        <>
          <Overlay setIsVissible={setFilterIsVissibe} />
          <MobileForm onSubmit={submitForm} onInput={filterJobFunc} />
        </>
      )}
    </>
  );
}

export default FilterForm;
