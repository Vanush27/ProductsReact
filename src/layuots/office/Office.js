import React from "react";
import NavBar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";
import classes from "../../style.module.scss";

const Office = ({children}) => {

    return (
        <div className={classes.main}>
            <div className={classes.main__navigition}>
                <NavBar/>
            </div>
            <div className={classes.main__content}>
                <Header/>
                {children}
            </div>
        </div>
    );
}

export default Office;