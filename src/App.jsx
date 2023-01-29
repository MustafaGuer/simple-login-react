import React, { useState, useEffect, Fragment } from "react";

import MainHeader from "./components/MainHeaderNav/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    // <>
    // <React.Fragment>
    // <Fragment>
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
    // </Fragment>
    // </React.Fragment>
    // </>
  );
}

export default App;
