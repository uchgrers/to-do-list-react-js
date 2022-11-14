import React from 'react';
import classes from './Footer.module.css';
import NavContainer from "../Nav/NavContainer";
import GoToPageContainer from "./GoToPage/GoToPageContainer";

const Footer = () => {
    return (
        <div className={classes.item}>
            <NavContainer />
            <GoToPageContainer />
        </div>
    );
};

export default Footer;