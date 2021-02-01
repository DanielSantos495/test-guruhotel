import React from 'react'
import PropTypes from 'prop-types'

import { input, label } from '@/styles/components/Input.module.scss'

export const Input = (props) => {

   const {
      type,
      value,
      name,
      placeholder,
      onChange,
      height,
      width
   } = props

   return(
      <label className={label} htmlFor={name} >
         <input
            className={input}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            style={{ height, width }}
         />
      </label>
   )
}

Input.propTypes = {
   type: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   height: PropTypes.string,
   width: PropTypes.string
}