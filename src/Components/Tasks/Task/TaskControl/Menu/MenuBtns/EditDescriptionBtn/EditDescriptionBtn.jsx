import React from 'react';
import classes from "../MenuBtns.module.css";

const EditDescriptionBtn = (props) => {

    return (
        <div className={classes.btnWrapper}>
            <i className="fa-solid fa-pen"></i>
            <button className={classes.menuBtn} onClick={props.onEditDescription}>Edit desc</button>
        </div>
    );
};

export default EditDescriptionBtn;