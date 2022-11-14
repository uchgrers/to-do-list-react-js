import React, {useState} from 'react';
import classes from "./Menu.module.css";
import MenuBtns from "./MenuBtns/MenuBtns";

const Menu = (props) => {

    const [isActive, setActive] = useState(false);

    const show = () => {
        setActive(!isActive);
    }

    return (
        <div className={classes.item} onClick={show}>
            <MenuBtns isActive={isActive} onTaskDelete={props.onTaskDelete} onTaskPin={props.onTaskPin} onEditDescription={props.onEditDescription}/>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
        </div>
    );
};

export default Menu;