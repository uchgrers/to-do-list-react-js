import React from 'react';
import Menu from "./Menu/Menu";
import classes from "./TaskControl.module.css"

const TaskControl = (props) => {
    return (
        <div className={classes.item}>
            <Menu onTaskDelete={props.onTaskDelete}
                  onTaskPin={props.onTaskPin}
                  onEditDescription={props.onEditDescription}/>
        </div>
    );
};

export default TaskControl;