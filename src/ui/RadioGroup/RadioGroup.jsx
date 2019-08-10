import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ value, options, onChangeRadio }) => {
    const onChange = e => console.log(e.currentTarget.value)

    return (
        <div class="control">
            {}
            <label class="radio">
                <input type="radio" name="foobar" />
                Foo
            </label>
            {options && options.map((option, i) => (
                <label class="radio" key={option}>
                    <input type="radio" name="foobar" checked />
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
