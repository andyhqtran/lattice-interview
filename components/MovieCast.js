import { pick } from '@styled-system/props'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Cast, CastSkeleton } from 'components/Cast'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export const MovieCastSkeleton = () => {
  return (
    <Box
      display='grid'
      gridColumnGap={6}
      gridRowGap={12}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
      mb={24}
    >
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
      <CastSkeleton />
    </Box>
  )
}

export const MovieCast = ({ id, ...restOfProps }) => {
  const router = useRouter()
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`, fetch)

  if (!data || error) return <MovieCastSkeleton />

  return (
    <Box
      display='grid'
      gridColumnGap={6}
      gridRowGap={12}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
      mb={24}
      {...pick(restOfProps)}
    >
      {data.cast && data.cast.slice(0, 8).map((cast) => (
        <Cast
          key={cast.cast_id}
          image={getImagePath(cast.profile_path, { width: 300 })}
          name={cast.name}
          role={cast.character}
        />
      ))}
      <Button
        gridColumn='1 / 5'
        onClick={() => router.push(`/movie/${id}/cast`)}
        variant='secondary'
        width='100%'
      >
        View entire cast
      </Button>
    </Box>
  )
}

MovieCast.propTypes = {
  /**
   * Move id used to fetch similar movies
   */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}
