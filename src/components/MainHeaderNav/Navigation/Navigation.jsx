import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    // <AuthContext.Consumer>
    // {(ctx) => {
    // return (
    <nav className={styles.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            {/* <button onClick={props.onLogout}>Logout</button> */}
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    // }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
