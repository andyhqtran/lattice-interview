import React from 'react'

import { Box } from 'components/Box'
import { MoviePoster } from 'components/MoviePoster'

export default {
  title: 'MoviePoster',
  component: MoviePoster
}

export const example = () => {
  return (
    <Box width={300}>
      <MoviePoster src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/unPB1iyEeTBcKiLg8W083rlViFH.jpg' />
    </Box>
  )
}

export const hoverable = () => {
  return (
    <Box width={300}>
      <MoviePoster
        hoverable
        src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/unPB1iyEeTBcKiLg8W083rlViFH.jpg'
      />
    </Box>
  )
}
