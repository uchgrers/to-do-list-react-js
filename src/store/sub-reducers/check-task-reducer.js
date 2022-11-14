export const checkTaskReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));
    allTasks[action.id - 1].checked = !state.tasks[action.id - 1].checked;

    return {
        ...state,
        tasks: allTasks,
        pageTasks: allTasks.filter(el => el.pageID === allTasks[action.id - 1].pageID)
    }
}