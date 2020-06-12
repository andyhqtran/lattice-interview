import { css } from '@styled-system/css'
import styled from 'styled-components'

import { Box } from 'components/Box'

export const StyledCertificationBadge = styled(Box)(
  {
    display: 'inline-flex',
    alignItems: 'center',
    height: 24,
    borderWidth: 2,
    borderStyle: 'solid',
    lineHeight: '24px'
  },
  css({
    borderColor: 'neutral.1',
    borderRadius: 1,
    paddingLeft: 4,
    paddingRight: 4,
    color: 'neutral.4',
    fontSize: 0,
    fontWeight: 'bold'
  })
)
