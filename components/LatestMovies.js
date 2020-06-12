import React, { Fragment } from 'react'
import useSWR, { useSWRPages } from 'swr'

import { Button } from 'components/Button'
import { Box } from 'components/Box'
import { Movie, MovieSkeleton } from 'components/Movie'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export const LatestMovies = () => {
  const {
    loadMore,
    isLoadingMore,
    isReachingEnd,
    pages
  } = useSWRPages(
    'latest-movies',
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}${offset ? `&page=${offset}` : ''}`, fetch)
      )

      if (!data) {
        return (
          <Fragment>
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
          </Fragment>
        )
      }

      return data.results.map((movie) => (
        <Movie
          date={movie.release_date}
          id={movie.id}
          image={getImagePath(movie.poster_path, { width: 300 })}
          key={movie.id}
          title={movie.title}
        />
      ))
    },
    data => data && data.data.total_pages ? data.data.page + 1 : null,
    []
  )

  return (
    <Box
      display='grid'
      gridColumnGap={6}
      gridRowGap={12}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
      mb={24}
    >
      {pages}
      {!isReachingEnd && (
        <Button gridColumn='1 / 5' onClick={loadMore} variant='secondary' width='100%'>
          {isLoadingMore ? 'Loading...' : 'Show more movies'}
        </Button>
      )}
    </Box>
  )
}
