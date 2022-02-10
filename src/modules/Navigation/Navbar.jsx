import React from "react";
import {Link} from "react-router-dom";

import classes from "./navigation.module.scss";

const NavBar = () => {

    return (
        <div className={classes.navigation}>
            <div>
                <div><Link to="/courses">Courses</Link></div>
                <div><Link to="/shop">Shop</Link></div>
                <div><Link to="/news">News</Link></div>
            </div>
        </div>
    );
}

export default NavBar;