import * as ACTIONS from './actions'
import initialFormValues from './initialFormValues'
import { BODY_TYPE } from 'constants/form'

export const formReducer = (state, action) => {
    const costFormula = ({ age, height, body }) => {
        let newCost = initialFormValues.cost

        // Age
        if (22 <= parseInt(age, 10)) newCost = newCost - 10
        if (35 > parseInt(age, 10)) newCost = newCost + 10

        // Height
        if (170 < parseInt(height, 10)) newCost = newCost - 10

        // Haircolor
        // Eyecolor
        // Beard
        // Body
        if (body === BODY_TYPE.FAT) newCost = newCost - 20
        if (body === BODY_TYPE.SLIM) newCost = newCost - 5

        return newCost
    }

    switch (action.type) {
        case ACTIONS.SET_AGE:
            return { ...state, ...{ age: action.value, cost: costFormula({ ...state, ...{ age: action.value } }) } }
        case ACTIONS.SET_HEIGHT:
            return { ...state, ...{ height: action.value, cost: costFormula({ ...state, ...{ height: action.value } }) } }
        case ACTIONS.SET_HAIRCOLOR:
            return { ...state, ...{ haircolor: action.value } }
        case ACTIONS.SET_EYECOLOR:
            return { ...state, ...{ eyecolor: action.value } }
        case ACTIONS.SET_BEARD:
            return { ...state, ...{ beard: action.value } }
        case ACTIONS.SET_BODY:
            return { ...state, ...{ body: action.value, cost: costFormula({ ...state, ...{ body: action.value } }) } }
        default:
            return state
    }
}

export default formReducer