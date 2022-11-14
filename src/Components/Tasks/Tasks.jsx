import React from 'react';
import Task from "./Task/Task";
import classes from "./Tasks.module.css";

const Tasks = (props) => {

    const onTaskStatusChange = (id, pageID) => {
        props.onTaskStatusChange(id, pageID)
    }

    const onTaskDelete = (id, pageID) => {
        props.onTaskDelete(id, pageID);
    }

    const onTaskPin = (id) => {
        props.onTaskPin(id);
    }

    const onTaskShowDescription = (id, pageID) => {
        props.onTaskShowDescription(id, pageID);
    }

    const onEditTaskDescription = (id, pageID) => {
        props.onEditTaskDescription(id, pageID);
    }

    const onDescriptionTextChange = (id, pageID, text) => {
        props.onDescriptionTextChange(id, pageID, text);
    }

    let tasks;

    if (props.tasks) {
        tasks = props.tasks.map(task => <Task
            text={task.taskText}
            id={task.id}
            checked={task.checked}
            pinned={task.pinned}
            pageID={task.pageID}
            description={task.description}
            onTaskShowDescription={() => onTaskShowDescription(task.id, task.pageID)}
            onEditTaskDescription={() => onEditTaskDescription(task.id, task.pageID)}
            onTaskStatusChange={() => (onTaskStatusChange(task.id, task.pageID))}
            onTaskDelete={() => (onTaskDelete(task.id, task.pageID))}
            onTaskPin={() => onTaskPin(task.id)}
            onDescriptionTextChange={onDescriptionTextChange}/>)
    }

    return (
        <div className={classes.item}>
            {tasks}
        </div>
    );
};

export default Tasks;