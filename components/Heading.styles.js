import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, space, typography, variant } from 'styled-system'

export const StyledHeading = styled.h1(
  css({
    margin: 0,
    color: 'black'
  }),
  variant({
    prop: 'variant',
    variants: {
      h1: {
        fontSize: 4,
        fontWeight: 'black',
        lineHeight: 3
      },
      h2: {
        fontSize: 3,
        fontWeight: 'black',
        lineHeight: 2
      },
      h3: {
        fontSize: 2,
        fontWeight: 'bold',
        lineHeight: 2
      },
      h4: {
        fontSize: 1,
        fontWeight: 'bold',
        lineHeight: 1
      }
    }
  }),
  compose(
    color,
    typography,
    space
  )
)
