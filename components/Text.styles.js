import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, space, typography } from 'styled-system'

export const StyledText = styled.p(
  {
    margin: 0
  },
  css({
    color: 'neutral.6',
    fontSize: 1,
    lineHeight: 1
  }),
  compose(
    color,
    space,
    typography
  )
)
