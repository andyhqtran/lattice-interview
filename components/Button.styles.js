import { css } from '@styled-system/css'
import { motion } from 'framer-motion'
import { transitions } from 'polished'
import styled from 'styled-components'
import { color, compose, grid, layout, space, variant } from 'styled-system'

export const StyledButton = styled(motion.button)(
  {
    outline: 'none',
    height: 56,
    border: 0,
    cursor: 'pointer',
    ...transitions('background-color', '0.2s ease')
  },
  css({
    backgroundColor: 'black',
    borderRadius: 2,
    color: 'white',
    fontWeight: 'bold'
  }),
  variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'black',
        color: 'white',

        '&:hover': {
          backgroundColor: 'neutral.5'
        }
      },
      secondary: {
        backgroundColor: 'neutral.1',
        color: 'neutral.6',

        '&:hover': {
          backgroundColor: 'neutral.0'
        }
      }
    }
  }),
  variant({
    prop: 'size',
    variants: {
      regular: {
        height: 40,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 0
      },
      large: {
        height: 56,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 1
      }
    }
  }),
  compose(
    color,
    grid,
    layout,
    space
  )
)
