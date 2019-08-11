import React, { createContext, useReducer } from 'react'

import initialFormValues from 'reducer/initialFormValues'
import formReducer from 'reducer/formReducer'

const ReducerContext = createContext(null)

const ReducerProvider = (props) => {
    const [formValue, dispatch] = useReducer(formReducer, initialFormValues)
    return (
        <ReducerContext.Provider value={{ formValue, dispatch }}>
            {props.children}
        </ReducerContext.Provider>
    )
}

export { ReducerContext, ReducerProvider }