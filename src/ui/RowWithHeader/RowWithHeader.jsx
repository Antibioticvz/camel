import React from 'react'
import PropTypes from 'prop-types'

const RowWithHeader = ({ header, rowComponent }) => {
    return (
        <div className="columns">
            <div className="column is-one-quarter">
                <h2 className="subtitle is-2"> {header} </h2>
            </div>
            <div className="column">
                {rowComponent}
            </div>
        </div>
    )
}

RowWithHeader.propTypes = {
    header: PropTypes.string.isRequired,
    rowComponent: PropTypes.node,
}
RowWithHeader.defaultProps = {
    rowComponent: null,
}
export default RowWithHeader
