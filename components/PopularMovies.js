import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import useSWR, { useSWRPages } from 'swr'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Movie, MovieSkeleton } from 'components/Movie'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export const PopularMovies = ({ mediaType, timeWindow }) => {
  const {
    loadMore,
    isLoadingMore,
    isReachingEnd,
    pages
  } = useSWRPages(
    'popular-movies',
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        useSWR(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.API_KEY}${offset ? `&page=${offset}` : ''}`, fetch)
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
    [mediaType, timeWindow]
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

PopularMovies.propTypes = {
  /**
   * Type of media that is fetched
   */
  mediaType: PropTypes.oneOf(['all', 'movie', 'person', 'tv']),

  /**
   * Time frame in which movies are sorted by
   */
  timeWindow: PropTypes.oneOf(['day', 'week'])
}

PopularMovies.defaultProps = {
  mediaType: 'movie',
  timeWindow: 'week'
}
