import {combineReducers, createStore} from 'redux';
import {rootReducer} from "./root-reducer";

let reducers = combineReducers({
    reducer: rootReducer
})

let store = createStore(reducers);

store.subscribe(() => {
    localStorage.setItem('currentPage', store.getState().reducer.currentPage);
    localStorage.setItem('tasks', JSON.stringify(store.getState().reducer.tasks));
    localStorage.setItem('pageTasks', JSON.stringify(store.getState().reducer.pageTasks));
    localStorage.setItem('pagesCount', JSON.stringify(store.getState().reducer.pagesCount));
})

window.store = store;

export default store;