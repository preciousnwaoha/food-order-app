import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/banner.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>FIVA FOODS</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
            {/* <img src={mealsImage} alt="A table full of delicious meals" /> */}
        </div>
        {/* <div className={classes["line"]}></div> */}
    </React.Fragment>
}

export default Header;