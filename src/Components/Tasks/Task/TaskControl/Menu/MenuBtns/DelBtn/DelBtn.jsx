import React from 'react';
import classes from "../MenuBtns.module.css";

const DelBtn = (props) => {
    return (
        <div className={classes.btnWrapper}>
            <i className="fa-solid fa-trash"></i>
            <button className={classes.menuBtn} onClick={props.onTaskDelete}>Delete</button>
        </div>
    );
};

export default DelBtn;