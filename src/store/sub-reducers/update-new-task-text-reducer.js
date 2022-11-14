export const updateNewTaskTextReducer = (state, action) => {

    let lengthError = {...state.lengthError};
    lengthError.status = action.newText.length > 35;

    return {
        ...state,
        newTaskText: action.newText,
        lengthError: lengthError
    }
}