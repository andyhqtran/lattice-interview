import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { linearGradient, transitions } from 'polished'
import styled from 'styled-components'

import { Box } from 'components/Box'
import { Card } from 'components/Card'

export const StyledMoviePosterOverlay = styled(Box)(
  (props) => ({
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxSizing: 'border-box',
    textAlign: 'center',
    opacity: 0,
    ...linearGradient({
      colorStops: [
        themeGet('colors.neutral.2')(props),
        themeGet('colors.neutral.5')(props)
      ],
      toDirection: 'to bottom'
    }),
    ...transitions(['opacity'], '0.2s ease')
  }),
  css({
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
    color: 'white',
    fontSize: 0,
    lineHeight: 0
  })
)

export const StyledMoviePoster = styled(Card)(
  (props) => ({
    position: 'relative',
    height: 0,
    paddingTop: '150%',
    overflow: 'hidden',
    cursor: props.hoverable && 'pointer',
    ...transitions(['box-shadow'], '0.2s ease'),

    '&:hover': props.hoverable && {
      boxShadow: `0 4px 12px ${themeGet('colors.neutral.2')(props)}`,

      [StyledMoviePosterOverlay]: {
        opacity: 1
      }
    }
  }),
  css({
    backgroundColor: 'neutral.0'
  })
)
