import React from 'react'

export default function SelectBox (props) {
    const { label, options, ...rest } = props
    const renderOptions = options.map((option, i) => (
        <option key={i} value={option}>
            {option}
        </option>
    ))
    return (
        <div className="form-group">
        <label className="dropdownLabel">{label}</label>
        <select className="form-control" {...rest} >
            <option value='' disabled>---Select---</option>
            {renderOptions}
        </select>
        </div>
    )
}