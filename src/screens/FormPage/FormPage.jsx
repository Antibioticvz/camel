import React, { useContext } from 'react'

import { HAIR_TYPE, EYE_TYPE, BEARD_TYPE, BODY_TYPE } from 'constants/form'
import { ReducerContext } from 'reducer/context'
import * as ACTIONS from 'reducer/actions'
import Row from 'ui/RowWithHeader'
import DropdownSelect from 'ui/DropdownSelect'
import RadioGroup from 'ui/RadioGroup'
import Slider from 'ui/Slider'

const FormPage = ({ checkResult }) => {
    const { formValue, dispatch } = useContext(ReducerContext)
    return (
        <>
            <Row {...{
                header: 'Age',
                rowComponent: <Slider {...{
                    value: formValue.age,
                    step: 1,
                    min: 14,
                    max: 70,
                    onChangeSlider: e => dispatch({ type: ACTIONS.SET_AGE, value: e.currentTarget.value }),
                }} />
            }} />

            <Row {...{
                header: 'Height (cm)',
                rowComponent: <Slider {...{
                    value: formValue.height,
                    step: 1,
                    min: 140,
                    max: 220,
                    onChangeSlider: e => dispatch({ type: ACTIONS.SET_HEIGHT, value: e.currentTarget.value }),
                }} />
            }} />

            <Row {...{
                header: 'Haircolor',
                rowComponent: <DropdownSelect {...{
                    value: formValue.haircolor,
                    options: Object.values(HAIR_TYPE),
                    onChangeSelect: e => dispatch({ type: ACTIONS.SET_HAIRCOLOR, value: e.currentTarget.value }),
                }} />
            }} />

            <Row {...{
                header: 'Eyecolor',
                rowComponent: <RadioGroup {...{
                    value: formValue.eyecolor,
                    options: Object.values(EYE_TYPE),
                    onChangeRadio: e => dispatch({ type: ACTIONS.SET_EYECOLOR, value: e.currentTarget.name }),
                }} />
            }} />

            <Row {...{
                header: 'Beard',
                rowComponent: <RadioGroup {...{
                    value: formValue.beard,
                    options: Object.values(BEARD_TYPE),
                    onChangeRadio: e => dispatch({ type: ACTIONS.SET_BEARD, value: e.currentTarget.name }),
                }} />
            }} />

            <Row {...{
                header: 'Body',
                rowComponent: <RadioGroup {...{
                    value: formValue.body,
                    options: Object.values(BODY_TYPE),
                    onChangeRadio: e => dispatch({ type: ACTIONS.SET_BODY, value: e.currentTarget.name }),
                }} />
            }} />

            <button className="button is-link" onClick={() => checkResult()} >Result</button>
        </>
    )
}

export default FormPage
