import {
    addTaskActionCreator,
    deleteAllTasksActionCreator,
    updateNewTaskTextActionCreator
} from "../../store/root-reducer";
import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        newTaskText: state.reducer.newTaskText,
        lengthError: state.reducer.lengthError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => {
            dispatch(updateNewTaskTextActionCreator(text));
        },
        addTask: () => {
            dispatch(addTaskActionCreator());
        },
        addTaskByEnter: () => {
            dispatch(addTaskActionCreator());
        },
        deleteAllTasks: () => {
            dispatch(deleteAllTasksActionCreator());
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;