export const iteratePageReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));
    let op = action.op === '>' ? 1 : -1;
    let currentPage = state.currentPage + op;

    if (currentPage < allTasks[0].pageID) {
        currentPage = allTasks[0].pageID
    } else if (currentPage > allTasks[allTasks.length - 1].pageID) {
        currentPage = allTasks[allTasks.length - 1].pageID
    }

    return {
        ...state,
        currentPage: currentPage,
        pageTasks: allTasks.filter(el => el.pageID === currentPage)
    }
}