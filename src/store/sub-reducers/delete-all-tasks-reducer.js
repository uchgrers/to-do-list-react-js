export const deleteAllTasksReducer = (state) => {

    return {
        ...state,
        tasks: [],
        pageTasks: [],
        pagesCount: 1,
        currentPage: 1,
    }
}