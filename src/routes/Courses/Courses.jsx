import React from "react";
import NavBar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";
import classes from "../../style.module.scss";

const Courses = () => {

    return (
        <div className={classes.main}>
            <div className={classes.main__navigition}><NavBar/></div>
            <div className={classes.main__content}>
                <Header/>
                COURSES
            </div>
        </div>
    );
}

export default Courses;