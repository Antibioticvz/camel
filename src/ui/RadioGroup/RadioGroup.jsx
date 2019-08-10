import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ value, options, onChangeRadio }) => {
    const onChange = e => onChangeRadio(e.currentTarget.name)

    return (
        <div class="control">
            {options && options.map(option => (
                <label class="radio" key={option}>
                    <input
                        type="radio"
                        name={option}
                        checked={option === value}
                        onChange={e => onChange(e)}
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
