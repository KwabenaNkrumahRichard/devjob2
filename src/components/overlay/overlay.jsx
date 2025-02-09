import classes from "./overlay.module.css";

function Overlay(props) {
  function closeOverlay() {
    props.setIsVissible(false);
  }

  return <div className={classes.overlay} onClick={closeOverlay}></div>;
}

export default Overlay;
