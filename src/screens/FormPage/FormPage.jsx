import React from 'react'
import { Link } from "react-router-dom"

import Row from 'ui/RowWithHeader'
import DropdownSelect from 'ui/DropdownSelect'
import RadioGroup from 'ui/RadioGroup'
import Slider from 'ui/Slider'

const FormPage = () => {
    return (
        <>
            <Row {...{
                header: 'Age',
                rowComponent: <Slider {...{
                    value: 22,
                    step: 1,
                    min: 14,
                    max: 70,
                }} />
            }} />

            <Row {...{
                header: 'Height (cm)',
                rowComponent: <Slider {...{
                    value: 170,
                    step: 1,
                    min: 140,
                    max: 220,
                }} />
            }} />

            <Row {...{
                header: 'Haircolor',
                rowComponent: <DropdownSelect {...{
                    value: 'blond',
                    options: ['blond', 'grey', 'red', 'black'],
                    onChangeSelect: () => { },
                }} />
            }} />

            <Row {...{
                header: 'Eyecolor',
                rowComponent: <RadioGroup {...{
                    value: 'gray',
                    options: ['gray', 'blue', 'green'],
                    onChangeRadio: () => { },
                }} />
            }} />

            <Row {...{
                header: 'Beard',
                rowComponent: <RadioGroup {...{
                    value: '1',
                    options: ['1', '2', '4'],
                    onChangeRadio: () => { },
                }} />
            }} />

            <Row {...{
                header: 'Body',
                rowComponent: <RadioGroup {...{
                    value: '1',
                    options: ['1', '2', '4'],
                    onChangeRadio: () => { },
                }} />
            }} />

            <Link to='result' className="button is-link">Result</Link>
        </>
    )
}

export default FormPage
