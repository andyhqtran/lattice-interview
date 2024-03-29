import { useRouter } from 'next/router'
import React from 'react'

import { Box } from 'components/Box'
import { H1, H2 } from 'components/Heading'
import { LatestMovies } from 'components/LatestMovies'
import { PopularMovies } from 'components/PopularMovies'
import { SearchField } from 'components/SearchField'

export default function Home () {
  const router = useRouter()

  return (
    <Box maxWidth={1080} mx='auto' pt={20}>
      <H1 mb={8}>Explore</H1>
      <SearchField
        mb={14}
        onSubmit={(value) => router.push(`/search/${encodeURI(value)}`)}
        placeholder='Search for a movie'
        width='100%'
      />
      <H2 mb={8}>Popular movies</H2>
      <PopularMovies />
      <H2 mb={8}>Latest movies</H2>
      <LatestMovies />
    </Box>
  )
}
