import React, { useContext } from 'react'
import { ReducerContext } from 'reducer/context'

import Share from 'ui/FBShare'

const ResultPage = () => {
    const { formValue } = useContext(ReducerContext)
    return (
        <>
            <h1 className="title is-1">{`Your boyfriend is worth ${formValue && formValue.cost} camels`}</h1>

            <Share />
        </>
    )
}

export default ResultPage
