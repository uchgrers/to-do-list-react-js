import React from 'react';
import classes from "./Task.module.css"
import TaskControl from "./TaskControl/TaskControl";
import Checkbox from "./TaskControl/Checkbox/Checkbox";
import { CSSTransition } from 'react-transition-group';
import './Description.css';

const Task = (props) => {

    const onDescriptionTextChange = (ev) => {
        let text = ev.target.value;
        props.onDescriptionTextChange(props.id, props.pageID, text);
    }

    return (
        <div className={classes.item}>
            <i className="fas fa-thumbtack pin" style={
                !props.pinned ? {display: "none"} : (props.checked ? {display: "block",
                                                     position: "absolute",
                                                     top: "10px",
                                                     left: "-25px",
                                                     color: "deeppink",
                                                     transform: "rotate(-45deg)",
                                                     opacity: "0.5",
                                                     cursor: "pointer"} :
                    {display: "block",
                    position: "absolute",
                    top: "10px",
                    left: "-25px",
                    color: "deeppink",
                    transform: "rotate(-45deg)",
                    cursor: "pointer"})}
            onClick={props.onTaskPin}>
            </i>
            <div className={classes.task}>
                <Checkbox checked={props.checked} onTaskStatusChange={props.onTaskStatusChange}/>
                <div className={props.checked ? classes.checkedTaskText : classes.taskText}
                     onClick={props.onTaskShowDescription}>
                    {props.text}
                </div>
                <CSSTransition in={props.description.visible} unmountOnExit timeout={500} classNames="description">
                    <textarea className={"description"}
                              onChange={onDescriptionTextChange}>
                        {props.description.text}
                    </textarea>
                </CSSTransition>
            </div>
            <TaskControl onTaskDelete={props.onTaskDelete}
                         onTaskPin={props.onTaskPin}
                         onEditDescription={props.onEditTaskDescription}/>
        </div>
    );
};

export default Task;