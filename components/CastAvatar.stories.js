import React from 'react'

import { Box } from 'components/Box'
import { CastAvatar } from 'components/CastAvatar'

export default {
  title: 'CastAvatar',
  component: CastAvatar
}

export const example = () => {
  return (
    <Box width={138}>
      <CastAvatar src='https://image.tmdb.org/t/p/w276_and_h350_face/aGzdIC5u2KaslrU9etNdPPMhLLs.jpg' />
    </Box>
  )
}
