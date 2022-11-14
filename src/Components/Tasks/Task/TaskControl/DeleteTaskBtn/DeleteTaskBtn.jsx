import React from 'react';
import classes from "./DeleteTaskBtn.module.css"

const DeleteTaskBtn = (props) => {
    return (
        <button className={classes.item}>
            <div onClick={props.onTaskDelete} className={classes.delete}></div>
        </button>
    );
};

export default DeleteTaskBtn;