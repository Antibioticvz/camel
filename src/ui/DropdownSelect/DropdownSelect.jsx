import React from 'react'
import PropTypes from 'prop-types'

const DropdownSelect = ({ value, options, onChangeSelect }) => {
    return (
        <div className="select  is-rounded">
            <select
                value={value}
                onChange={e => onChangeSelect(e.target.value)}
            >
                <option>Select dropdown</option>
                {options && options.map(option => <option key={option}>{option}</option>)}
            </select>
        </div>
    )
}

DropdownSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChangeSelect: PropTypes.func.isRequired,
}
DropdownSelect.defaultProps = {
    value: null,
    options: null,
}

export default DropdownSelect
