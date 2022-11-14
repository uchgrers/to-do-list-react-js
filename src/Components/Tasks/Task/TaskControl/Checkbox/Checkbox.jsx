import React from 'react';
import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
    return (
        <label className={classes.item}>
            <input onChange={props.onTaskStatusChange}
                   type="checkbox"
                   checked={props.checked}/>
            <span></span>
        </label>
    );
};

export default Checkbox;