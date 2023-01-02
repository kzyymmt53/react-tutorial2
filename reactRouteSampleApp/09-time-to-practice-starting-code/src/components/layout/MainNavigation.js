import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate Quate</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quates" activeClassName={classes.active}>
              All Quates
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quate" activeClassName={classes.active}>
              Add a Quate
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
