import {addTaskReducer} from "./sub-reducers/add-task-reducer";
import {updateNewTaskTextReducer} from "./sub-reducers/update-new-task-text-reducer";
import {checkTaskReducer} from "./sub-reducers/check-task-reducer";
import {deleteTaskReducer} from "./sub-reducers/delete-task-reducer";
import {pinTaskReducer} from "./sub-reducers/pin-task-reducer";
import {iteratePageReducer} from "./sub-reducers/iterate-page-reducer";
import {goToPageReducer} from "./sub-reducers/go-to-page-reducer";
import {showDescriptionReducer} from "./sub-reducers/show-description-reducer";
import {changeDescriptionTextReducer} from "./sub-reducers/change-description-text-reducer";
import {editDescriptionReducer} from "./sub-reducers/edit-description-reducer";
import {deleteAllTasksReducer} from "./sub-reducers/delete-all-tasks-reducer";

export const ADD_TASK = "ADD-TASK";
export const UPDATE_NEW_TASK_TEXT = "UPDATE-NEW-TASK-TEXT";
export const CHECK_TASK = "CHECK-TASK";
export const DELETE_TASK = "DELETE-TASK";
export const PIN_TASK = "PIN-TASK";
export const CHANGE_PAGE = "CHANGE-PAGE";
export const ITERATE_PAGE = "ITERATE-PAGE";
export const GO_TO_PAGE = "GO-TO-PAGE";
export const SHOW_DESCRIPTION = "SHOW-DESCRIPTION";
export const EDIT_DESCRIPTION = "EDIT-DESCRIPTION";
export const CHANGE_DESCRIPTION_TEXT = "CHANGE-DESCRIPTION-TEXT";
export const DELETE_ALL_TASKS = "DELETE-ALL-TASKS";

export const initialState = {
    newTaskText: '',
    lengthError: {
        message: "Task length must be no more than 35 characters",
        status: false
    },
    currentPage: Number(localStorage.getItem('currentPage')) || 0,
    pageTasks: JSON.parse(localStorage.getItem('pageTasks')) || [],
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    pagesCount: localStorage.getItem('tasks') ? Math.ceil(JSON.parse(localStorage.getItem('tasks')).length / 9) : 1,
    pageSize: 9
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return addTaskReducer(state);
        case UPDATE_NEW_TASK_TEXT:
            return updateNewTaskTextReducer(state, action);
        case CHECK_TASK:
            return checkTaskReducer(state, action);
        case DELETE_TASK:
            return deleteTaskReducer(state, action);
        case PIN_TASK:
            return pinTaskReducer(state, action);
        case SHOW_DESCRIPTION:
            return showDescriptionReducer(state, action);
        case CHANGE_DESCRIPTION_TEXT:
            return changeDescriptionTextReducer(state, action);
        case EDIT_DESCRIPTION:
            return editDescriptionReducer(state, action);
        case DELETE_ALL_TASKS:
            return deleteAllTasksReducer(state);
        case ITERATE_PAGE:
            return iteratePageReducer(state, action);
        case GO_TO_PAGE:
            return goToPageReducer(state, action);
        default:
            return state
    }
}

export const addTaskActionCreator = () => ({type: ADD_TASK});
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text});
export const checkTaskActionCreator = (id, pageID) => ({type: CHECK_TASK, id: id, pageID: pageID});
export const deleteTaskActionCreator = (id, pageID) => ({type: DELETE_TASK, id: id, pageID: pageID});
export const pinTaskActionCreator = (id) => ({type: PIN_TASK, id: id});
export const iteratePageActionCreator = (id, op) => ({type: ITERATE_PAGE, id: id, op: op});
export const goToPageActionCreator = (id) => ({type: GO_TO_PAGE, id: id});
export const showDescriptionActionCreator = (id, pageID) => ({type: SHOW_DESCRIPTION, id: id, pageID: pageID});
export const changeDescriptionTextActionCreator = (id, pageID, text) => ({type: CHANGE_DESCRIPTION_TEXT, id: id, pageID: pageID, newText: text});
export const editDescriptionActionCreator = (id, pageID, text) => ({type: EDIT_DESCRIPTION, id: id, pageID: pageID, newText: text});
export const deleteAllTasksActionCreator = () => ({type: DELETE_ALL_TASKS});
