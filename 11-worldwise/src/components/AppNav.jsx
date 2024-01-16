import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
// or
// import { nav } from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities"> Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );

  // <nav className={nav}>App Navigation</nav>;
}

export default AppNav;
