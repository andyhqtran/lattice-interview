import propTypes from '@styled-system/prop-types'
import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledBox } from './Box.styles'

/**
 * A Box component is used in place of div and allows access to
 * styled system props and theme values.
 */
export const Box = ({ children, className, onClick, ...restOfProps }) => {
  return (
    <StyledBox
      className={className}
      onClick={onClick}
      {...pick(restOfProps)}
    >
      {children}
    </StyledBox>
  )
}

Box.propTypes = {
  /**
   * Component children
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /**
   * Adds in additional class names in addition to what is generated by styled components.
   */
  className: PropTypes.string,

  /**
   * onClick event
   */
  onClick: PropTypes.func,

  /**
   * Styled system props
   */
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
}
