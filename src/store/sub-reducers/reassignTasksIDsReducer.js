export const reassignTasksIDsReducer = (tasks, pageSize) => {
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].id = i + 1;
        tasks[i].pageID = Math.ceil(tasks[i].id / pageSize);
    }
    return tasks;
}