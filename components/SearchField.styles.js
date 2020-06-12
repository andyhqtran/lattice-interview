import { css } from '@styled-system/css'
import { transitions } from 'polished'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

export const StyledSearchField = styled.form(
  compose(
    layout,
    space
  )
)

export const StyledSearchFieldInput = styled.input(
  {
    outline: 'none',
    width: '100%',
    height: 56,
    border: '2px solid transparent',
    boxSizing: 'border-box',
    ...transitions(['background', 'border-color'], '0.2s ease')
  },
  css({
    backgroundColor: 'neutral.0',
    borderRadius: 2,
    paddingLeft: 6,
    paddingRight: 6,
    color: 5,
    fontSize: 1,

    '&:focus, &:hover': {
      backgroundColor: 'white',
      borderColor: 'neutral.1'
    }
  })
)
