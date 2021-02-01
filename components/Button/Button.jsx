import React from 'react'
import PropTypes from 'prop-types'

import { button } from '@/styles/components/Button.module.scss'

export const Button = (props) => {

   const {
      children,
      type,
      onClick,
      height,
      width
   } = props

   return(
      <button
         className={button}
         type={type}
         onClick={onClick}
         style={{ width, height }}
      >
         {children}
      </button>
   )
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   type: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
   height: PropTypes.string,
   width: PropTypes.string
}