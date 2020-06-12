import styled from 'styled-components'
import { compose, layout, position, space } from 'styled-system'

export const StyledImage = styled.img(
  {
    display: 'block',
    width: '100%'
  },
  compose(
    layout,
    position,
    space
  )
)
