export const pinTaskReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));

    allTasks[action.id - 1].pinned = !state.tasks[action.id - 1].pinned;
    allTasks.sort((a, b) => b.pinned - a.pinned);

    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].id = i + 1;
        allTasks[i].pageID = Math.ceil(state.tasks[i].id / state.pageSize);
    }

    return {
        ...state,
        tasks: allTasks,
        pageTasks: allTasks.filter(el => el.pageID === state.tasks[action.id - 1].pageID)
    }
}