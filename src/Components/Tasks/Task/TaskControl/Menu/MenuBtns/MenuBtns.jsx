import React from 'react';
import classes from "./MenuBtns.module.css"
import DelBtn from "./DelBtn/DelBtn";
import PinBtn from "./PinBtn/PinBtn";
import EditDescriptionBtn from "./EditDescriptionBtn/EditDescriptionBtn";

const MenuBtns = (props) => {

    return (
        <div className={props.isActive ? classes.show : classes.dropdownContent}>
            <DelBtn className={classes.btnWrapper} onTaskDelete={props.onTaskDelete}/>
            <PinBtn className={classes.btnWrapper} onTaskPin={props.onTaskPin}/>
            <EditDescriptionBtn className={classes.menuBtn}  onEditDescription={props.onEditDescription}/>
        </div>
    );
};

export default MenuBtns;