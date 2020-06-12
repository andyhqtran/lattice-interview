import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import styled from 'styled-components'

import { Box } from 'components/Box'

export const StyledPopup = styled(Box)(
  (props) => ({
    position: 'fixed',
    maxWidth: 'calc(100% - 48px)',
    bottom: 24,
    right: 24,
    boxShadow: `0 4px 12px ${themeGet('colors.neutral.2')(props)}`
  }),
  css({
    background: 'white',
    borderRadius: 2
  })
)

export const StyledPopupButton = styled.button(
  (props) => ({
    outline: 'none',
    zIndex: 1,
    position: 'absolute',
    top: -16,
    right: -16,
    width: 32,
    height: 32,
    border: 0,
    borderRadius: '100%',
    boxShadow: `0 4px 12px ${themeGet('colors.neutral.2')(props)}`,
    cursor: 'pointer'
  }),
  css({
    background: 'black',
    color: 'white'
  })
)
