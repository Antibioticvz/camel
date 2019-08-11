import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ value, options, onChangeRadio }) => {
    return (
        <div className="control">
            {options && options.map(option => (
                <label className="radio" key={option}>
                    <input
                        type="radio"
                        name={option}
                        checked={option === value}
                        onChange={e => onChangeRadio(e)}
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

RadioGroup.propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
}
RadioGroup.defaultProps = {
    value: null,
    options: null,
}

export default RadioGroup
