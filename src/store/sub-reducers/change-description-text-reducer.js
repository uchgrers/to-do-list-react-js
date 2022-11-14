export const changeDescriptionTextReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));
    allTasks[action.id - 1].description.text = action.newText;

    return {
        ...state,
        tasks: allTasks,
        pageTasks: allTasks.filter(el => el.pageID === allTasks[action.id - 1].pageID)
    }
}