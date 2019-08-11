import React from 'react'
import PropTypes from 'prop-types'

const Slider = ({ step, min, max, value, onChangeSlider }) => {
    return (
        <div className="columns is-mobile">
            <div className="column is-one-fifth">
                <h2 className="subtitle is-3"> {value} </h2>
            </div>
            <div className="column">
                <input className="slider is-fullwidth is-info" type="range"
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    onChange={e => onChangeSlider(e)}
                />
            </div>
        </div>
    )
}

Slider.propTypes = {
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onChangeSlider: PropTypes.func.isRequired,
}

export default Slider
