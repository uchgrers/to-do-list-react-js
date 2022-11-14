import {createTaskReducer} from "./createTaskReducer";

export const addTaskReducer = (state) => {

    let newTask = createTaskReducer(state);
    let lengthError = {...state.lengthError};
    lengthError.status = false;

    if (newTask.taskText) {
        let allTasks = [...JSON.parse(JSON.stringify(state.tasks)), newTask];

        return {
            ...state,
            pagesCount: Math.ceil(allTasks.length / state.pageSize),
            currentPage: newTask.pageID,
            lengthError: lengthError,
            tasks: allTasks,
            pageTasks: allTasks.filter(el => el.pageID === newTask.pageID),
            newTaskText: ''
        }
    }
}