import React from 'react'

import Row from 'ui/RowWithHeader'
import DropdownSelect from 'ui/DropdownSelect'

const FormPage = () => {
    return (
        <div>
            FormPage
            <Row {...{
                header: 'test',
                rowComponent: <DropdownSelect {...{
                    options: ['1', '2', '4']
                }} />
            }} />
        </div>
    )
}

export default FormPage
