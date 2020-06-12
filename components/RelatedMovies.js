import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import React from 'react'
import useSWR from 'swr'

import { Box } from 'components/Box'
import { Movie, MovieSkeleton } from 'components/Movie'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export const RelatedMoviesSkeleton = (props) => {
  return (
    <Box
      display='grid'
      gridColumnGap={6}
      gridRowGap={12}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
      mb={24}
      {...props}
    >
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
    </Box>
  )
}

export const RelatedMovies = ({ id, limit, ...restOfProps }) => {
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}`, fetch)

  if (!data || error) return <RelatedMoviesSkeleton />

  return (
    <Box
      display='grid'
      gridColumnGap={6}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
      {...pick(restOfProps)}
    >
      {data.results && data.results.slice(0, limit).map((movie) => (
        <Movie
          date={movie.release_date}
          id={movie.id}
          image={getImagePath(movie.poster_path, { width: 300 })}
          key={movie.id}
          title={movie.title}
        />
      ))}
    </Box>
  )
}

RelatedMovies.propTypes = {
  /**
   * Move id used to fetch similar movies
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * Limit the amount of movies rendered in the DOM
   */
  limit: PropTypes.number
}

RelatedMovies.defaultProps = {
  limit: 4
}
