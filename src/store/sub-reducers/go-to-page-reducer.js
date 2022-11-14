export const goToPageReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));

    return {
        ...state,
        pageTasks: allTasks.filter(el => el.pageID === action.id + 1),
        currentPage: action.id + 1
    }
}