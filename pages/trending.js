import React from 'react'

import { Box } from 'components/Box'
import { H1 } from 'components/Heading'
import { PopularMovies } from 'components/PopularMovies'

export default function Trending () {
  return (
    <Box maxWidth={1080} mx='auto' pt={20}>
      <H1 mb={8}>Popular movies</H1>
      <PopularMovies />
    </Box>
  )
}
