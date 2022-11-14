export const createTaskReducer = (state) => {
    let id = state.tasks.length + 1;
    return  {
        id: id,
        taskText: state.newTaskText,
        checked: false,
        pinned: false,
        pinID: id,
        pageID: Math.ceil(id / state.pageSize),
        description: {
            visible: false,
            text: null
        }
    }
}