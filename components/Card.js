import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledCard } from './Card.styles'

export const Card = ({
  children,
  className,
  ...restOfProps
}) => {
  return (
    <StyledCard
      className={className}
      {...pick(restOfProps)}
    >
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
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
  className: PropTypes.string
}
