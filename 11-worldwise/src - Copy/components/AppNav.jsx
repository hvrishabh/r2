import styles from "./AppNav.module.css";
// or
// import { nav } from "./AppNav.module.css";

function AppNav() {
  return <nav className={styles.nav}>AppNavigation</nav>;

  // <nav className={nav}>App Navigation</nav>;
}

export default AppNav;
