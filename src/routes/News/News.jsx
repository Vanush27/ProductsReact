import React from "react";
import classes from "../../style.module.scss";
import Navbar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";

const News = () => {

    return (

        <div className={classes.main}>
            <div className={classes.main__navigition}><Navbar/></div>
            <div className={classes.main__content}>
                <Header/>
                News
            </div>
        </div>
    );
}

export default News;