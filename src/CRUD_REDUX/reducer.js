import { ADD_STUDENT, DELETE_STUDENT, SEARCH_STUDENT, SET_STUDENT, UPDATE_STUDENT } from "./actionTypes"

const initState = {
    todos: [
        {
            id: 0,
            msv: '123',
            name: 'Nguyễn Duy Anh',
            classes: '12A'
        },
        {
            id: 1,
            msv: '225',
            name: 'Trần Minh Khang ',
            classes: '12A'
        },
        {
            id: 2,
            msv: '134',
            name: 'Đào Tùng Quốc',
            classes: '12A'
        }
    ],
    todoList: []



}
function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return { ...state, todos: [...state.todos, action.payload] }
        case DELETE_STUDENT:
            return { ...state, todos: [...state.todos.filter((todo) => todo.id !== action.payload)] }
        case UPDATE_STUDENT:
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            msv: action.payload.msv,
                            name: action.payload.name,
                            classes: action.payload.classes

                        }
                        : item
                )
            };
        case SEARCH_STUDENT:

            return {
                ...state, todos: state.todos, todoList: [...state.todos.filter((item) =>
                    item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().indexOf(action.payload.trim()) !== -1
                    || item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').indexOf(action.payload.trim()) !== -1
                    || item.name.indexOf(action.payload.trim()) !== -1
                    || item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toUpperCase().indexOf(action.payload.trim()) !== -1
                    || item.name.toUpperCase().indexOf(action.payload.trim()) !== -1)]
            }
        case SET_STUDENT:
            return { ...state, todos: state.todos }
        default:
            return state;
    }

}

export default reducer
