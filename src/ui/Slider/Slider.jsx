import React from 'react'
import PropTypes from 'prop-types'

const Slider = ({ step, min, max, value }) => {
    return (
        <div class="columns is-mobile">
            <div class="column is-one-fifth">
                <h2 className="subtitle is-3"> {value} </h2>
            </div>
            <div class="column">
                <input class="slider is-fullwidth is-info" step={step} min={min} max={max} value={value} type="range" />
            </div>
        </div>
    )
}

Slider.propTypes = {
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default Slider
