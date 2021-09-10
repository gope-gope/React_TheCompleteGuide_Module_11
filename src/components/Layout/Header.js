import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton.js";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImage}
          alt="A table full of delicious food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
