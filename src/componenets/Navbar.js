import styles from "./navbar.module.scss";

import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div class={styles.parent}>
        <Link to='/' style={{ color: "inherit", textDecoration: "inherit" }}>
          <span>Create</span>
        </Link>
        <Link
          to='/forms'
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span>Forms</span>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
