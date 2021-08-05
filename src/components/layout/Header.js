import React, { Fragment } from "react"; 
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header} >
          <h1>MAKE YOUR WISH</h1>
          <HeaderCartButton onClick={props.onshowCart} />
      </header>
      <div className={classes['main-image']} >
          <img src={mealsImage} alt="shoes store" />
      </div>
    </Fragment>
  );
};

export default Header;
