import {
    changeDescriptionTextActionCreator,
    checkTaskActionCreator,
    deleteTaskActionCreator, editDescriptionActionCreator,
    pinTaskActionCreator, showDescriptionActionCreator,
} from "../../store/root-reducer";
import Tasks from "./Tasks";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        tasks: state.reducer.pageTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskShowDescription: (id, pageID) => {
            dispatch(showDescriptionActionCreator(id, pageID));
        },
        onEditTaskDescription: (id, pageID, text) => {
            dispatch(editDescriptionActionCreator(id, pageID, text));
        },
        onTaskStatusChange: (id, pageID) => {
            dispatch(checkTaskActionCreator(id, pageID));
        },
        onTaskDelete: (id, pageID) => {
            dispatch(deleteTaskActionCreator(id, pageID));
        },
        onTaskPin: (id) => {
            dispatch(pinTaskActionCreator(id));
        },
        onDescriptionTextChange: (id, pageID, text) => {
            dispatch(changeDescriptionTextActionCreator(id, pageID, text));
        }
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;