import React from 'react'

import { Box } from 'components/Box'
import { H1 } from 'components/Heading'
import { LatestMovies } from 'components/LatestMovies'

export default function Latest () {
  return (
    <Box maxWidth={1080} mx='auto' pt={20}>
      <H1 mb={8}>Latest movies</H1>
      <LatestMovies />
    </Box>
  )
}
