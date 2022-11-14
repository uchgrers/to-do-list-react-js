import React from 'react';
import classes from "./Header.module.css";

const Header = (props) => {

    const refText = React.createRef();

    const onTextChange = (ev) => {
        let text = ev.target.value;
        props.onTextChange(text);
    }

    const addTask = () => {
        let text = refText.current.value;
        if (text) {props.addTask()}
    }

    const addTaskByEnter = (ev) => {
        let text = refText.current.value;
        if (ev.key === 'Enter' && text) {
            props.addTaskByEnter();
        }
    }

    const deleteAllTasks = () => {
        props.deleteAllTasks();
    }

    return (
        <div className={classes.item}>

            <div className={props.lengthError.status ? classes.showMessage : classes.errorMessage}>{props.lengthError.message}</div>
            <input onChange={onTextChange}
                   ref={refText}
                   placeholder="Enter task..."
                   type="text"
                   value={props.newTaskText}
                   onKeyPress={addTaskByEnter}
            />
            <button className={classes.button}
                    onClick={addTask}>
                Add task
            </button>
            <button className={classes.button}
                    onClick={deleteAllTasks}>
                Delete all
            </button>
        </div>
    );
};

export default Header;