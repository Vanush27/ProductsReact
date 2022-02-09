import React from "react";
import Navbar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";
import classes from "../../style.module.scss";

const Courses = () => {

    return (
        <div className={classes.main}>
            <div className={classes.main__navigition}><Navbar/></div>
            <div className={classes.main__content}>
                <Header/>
                COURSES
            </div>
        </div>
    );
}

export default Courses;