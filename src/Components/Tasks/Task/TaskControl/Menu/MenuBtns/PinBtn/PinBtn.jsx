import React from 'react';
import classes from "../MenuBtns.module.css";

const PinBtn = (props) => {
    return (
        <div className={classes.btnWrapper}>
            <i className="fa-solid fa-thumbtack"></i>
            <button className={classes.menuBtn} onClick={props.onTaskPin}>Pin</button>
        </div>
    );

};

export default PinBtn;