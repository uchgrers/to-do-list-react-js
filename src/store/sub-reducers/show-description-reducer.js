export const showDescriptionReducer = (state, action) => {

    if (state.tasks[action.id - 1].description.text) {

        let allTasks = JSON.parse(JSON.stringify(state.tasks));
        allTasks.forEach((el, i, arr) => {
            i === action.id - 1 ?
                arr[i].description.visible = !arr[i].description.visible
                : arr[i].description.visible = false;
        })

        return {
            ...state,
            tasks: allTasks,
            pageTasks: allTasks.filter(el => el.pageID === allTasks[action.id - 1].pageID)
        }
    } else {
        return state;
    }
}