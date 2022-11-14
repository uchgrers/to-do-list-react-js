import {reassignTasksIDsReducer} from "./reassignTasksIDsReducer";

export const deleteTaskReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));
    const pageID = allTasks[action.id - 1].pageID;

    allTasks.splice(action.id - 1, 1);

    const sortedTasks = reassignTasksIDsReducer(allTasks, state.pageSize);

    let pageTasks = sortedTasks.filter(el => el.pageID === pageID).length > 0 ?
          sortedTasks.filter(el => el.pageID === pageID) : sortedTasks.filter(el => el.pageID === pageID - 1);

    return {
        ...state,
        tasks: sortedTasks,
        pageTasks: pageTasks,
        pagesCount: Math.ceil(allTasks.length / state.pageSize) || 1,
        currentPage: pageTasks[0] ? pageTasks[0].pageID : 1
    }
}