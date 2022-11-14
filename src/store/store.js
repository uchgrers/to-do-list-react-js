// import {rootReducer} from "./root-reducer";
//
// let store = {
//     _state: {
//         todos: {
//             tasks: [
//                 // {id: 1, taskText: "task 1", checked: false, pinned: false, pinID: 1, pageID: 1},
//                 // {id: 2, taskText: "task 2", checked: true, pinned: false, pinID: 2, pageID: 1}
//             ],
//             newTaskText: ""
//         },
//         lengthError: {
//             message: "Task length must be no more than 35 characters",
//             status: false
//         },
//         pages: [
//             {id: 1, pageTasks: [], active: false}
//         ],
//         currentPage: Number(localStorage.getItem('currentPage')) || 0
//     },
//     getState () {
//         return this._state
//     },
//     _rerenderEntireTree () {},
//     subscribe (observer) {
//         this._rerenderEntireTree = observer;
//     },
//     dispatch (action) {
//         this._state = rootReducer(this._state, action);
//         localStorage.setItem('currentPage', this._state.currentPage);
//         localStorage.setItem('pages', JSON.stringify(this._state.pages));
//         localStorage.setItem('tasks', JSON.stringify(this._state.tasks));
//         this._rerenderEntireTree();
//     }
// }
//
// export default store
