import React from 'react'

import Row from 'ui/RowWithHeader'

const FormPage = () => {
    return (
        <div>
            FormPage
            <Row {...{
                header: 'test',
                rowComponent: 'rowComponent'
            }} />
        </div>
    )
}

export default FormPage
