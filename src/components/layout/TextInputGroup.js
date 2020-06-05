import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

 const TextInputGroup=({
     label,
     name,
     type,
     onChange,
     placeholder,
     value,
     error
 })=>{
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={classnames('form form-control form-control-lg',{'is-invalid':error})}
        value={value}
        onChange={onChange}
        label={label}
        />
        {error&&<div className="invalid-feedback">{error}</div>}
    </div>
    )
 }
 TextInputGroup.prototypes={
     name:PropTypes.string.isRequired,
     label:PropTypes.string.isRequired,
     value:PropTypes.string.isRequired,
     type:PropTypes.string.isRequired,
     onChange:PropTypes.func.isRequired,
     placeholder:PropTypes.string.isRequired
 }
 TextInputGroup.defaultProps={
     type:'text'
 }
    

export default TextInputGroup;