import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

import Card from "../UI/Card/Card";

import styles from "./Home.module.css";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
