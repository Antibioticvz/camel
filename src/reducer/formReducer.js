import * as ACTIONS from './actions'

export const formReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_AGE:
            return { ...state, ...{ age: action.value } }
        case ACTIONS.SET_HEIGHT:
            return { ...state, ...{ height: action.value } }
        case ACTIONS.SET_HAIRCOLOR:
            return { ...state, ...{ haircolor: action.value } }
        case ACTIONS.SET_EYECOLOR:
            return { ...state, ...{ eyecolor: action.value } }
        case ACTIONS.SET_BEARD:
            return { ...state, ...{ beard: action.value } }
        case ACTIONS.SET_BODY:
            return { ...state, ...{ body: action.value } }
        default:
            return state
    }
}

export default formReducer