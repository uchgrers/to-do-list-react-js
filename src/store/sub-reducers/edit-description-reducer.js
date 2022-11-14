export const editDescriptionReducer = (state, action) => {

    let allTasks = JSON.parse(JSON.stringify(state.tasks));
    allTasks.forEach((el, index, array) => {
        index === action.id - 1 ?
            array[index].description.visible = true
            : array[index].description.visible = false;
    });

    return {
        ...state,
        tasks: allTasks,
        pageTasks: allTasks.filter(el => el.pageID === allTasks[action.id - 1].pageID)
    }
}