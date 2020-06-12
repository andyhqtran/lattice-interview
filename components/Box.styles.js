import styled from 'styled-components'
import { background, border, color, compose, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system'

export const StyledBox = styled('div')(
  {
    boxSizing: 'border-box'
  },
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
)
