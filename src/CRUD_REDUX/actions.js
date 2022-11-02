import { ADD_STUDENT, DELETE_STUDENT, SEARCH_STUDENT, SET_STUDENT, UPDATE_STUDENT, } from "./actionTypes";
export const addStudent = (payload) => {
    return ({
        type: ADD_STUDENT,
        payload
    })
}
export const deleteStudent = (payload) => {
    return ({
        type: DELETE_STUDENT,
        payload
    })
}
export const updateStudent = (payload) => {
    return ({
        type: UPDATE_STUDENT,
        payload
    })
}
export const searchStudent = (payload) => {
    return ({
        type: SEARCH_STUDENT,
        payload
    })
}
export const setStudent = (payload) => {
    return ({
        type: SET_STUDENT,
        payload
    })
}