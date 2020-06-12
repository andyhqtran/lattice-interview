import { css } from '@styled-system/css'
import styled from 'styled-components'

import { Box } from 'components/Box'

export const StyledSkeleton = styled(Box)(
  css({
    backgroundColor: 'neutral.0',
    borderRadius: 1
  })
)
