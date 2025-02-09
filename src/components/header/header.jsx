import { Link } from "react-router-dom";
import ToggleTheme from "../toggleTheme/toggleTheme";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.backgroundImage}>
        <div className={classes.backgroundHeader}>
          <Link to="/">
            <h1 className={classes.h1}>devjobs</h1>
          </Link>
          <div className={classes.toggle}>
            <ToggleTheme />
          </div>
        </div>
        <img
          src="./../../assets/desktop/bg-pattern-header.svg"
          alt=""
          className={classes.img}
        />
      </div>
    </header>
  );
}

export default Header;
