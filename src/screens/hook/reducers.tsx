import {
    SET_PASSWORD,
    SET_USER_NAME
} from './types'

export default (state:any, action:any) => {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, username: action.payload }
        case SET_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}