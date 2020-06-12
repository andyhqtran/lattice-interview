import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import useSWR from 'swr'
import YouTube from 'react-youtube'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { CertificationBadge } from 'components/CertificationBadge'
import { H2, H3 } from 'components/Heading'
import { MovieCast, MovieCastSkeleton } from 'components/MovieCast'
import { MoviePoster } from 'components/MoviePoster'
import { Popup } from 'components/Popup'
import { RelatedMovies, RelatedMoviesSkeleton } from 'components/RelatedMovies'
import { Skeleton } from 'components/Skeleton'
import { Text } from 'components/Text'
import fetch from 'utils/fetch'
import { formatDate } from 'utils/format-date'
import { formatRuntime } from 'utils/format-runtime'
import { getImagePath } from 'utils/get-image-path'

export const MovieDetailsSkeleton = () => {
  return (
    <Box
      display='grid'
      gridColumnGap={12}
      gridTemplateColumns='1fr 2fr'
      mb={24}
    >
      <Box>
        <MoviePoster />
      </Box>
      <Box>
        <Skeleton height={40} mb={3} width='40%' />
        <Skeleton height={28} mb={3} width='60%' />
        <Skeleton height={112} mb={6} />
        <Skeleton height={40} mb={3} width={56} />
        <MovieCastSkeleton />
        <RelatedMoviesSkeleton />
      </Box>
    </Box>
  )
}

export const MovieDetails = ({ id }) => {
  const [trailerPopup, setTrailerPopup] = useState(false)
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=credits,release_dates,videos`, fetch)

  const runtime = data && formatRuntime(data.runtime)
  const usCertification = data && data.release_dates.results.find((result) => result.iso_3166_1.toLowerCase() === 'us')
  const certification = usCertification && usCertification.release_dates[0].certification
  const genres = data && data.genres.map((genre) => genre.name).join(', ')
  const date = data && formatDate(data.release_date)
  const trailer = data && data.videos.results.find((result) => result.type === 'Trailer')

  if (!data) return <MovieDetailsSkeleton />

  return (
    <Fragment>
      <Box
        display='grid'
        gridColumnGap={12}
        gridTemplateColumns='1fr 2fr'
        mb={24}
      >
        <Box>
          <MoviePoster
            mb={6}
            src={getImagePath(data.poster_path, { width: 780 })}
          />
          <Button
            onClick={() => setTrailerPopup(true)}
            size='large'
            width='100%'
            variant='primary'
          >
            Watch trailer
          </Button>
        </Box>
        <Box>
          <H2 mb={3}>{data.title}</H2>
          <Box alignItems='center' display='flex' mb={6}>
            {certification && (
              <Fragment>
                <CertificationBadge>{certification}</CertificationBadge>
                <Box color='neutral.4' mx={2}>&middot;</Box>
              </Fragment>
            )}
            {runtime && (
              <Fragment>
                <Text color='neutral.4' fontSize={0}>{runtime}</Text>
                <Box color='neutral.4' mx={2}>&middot;</Box>
              </Fragment>
            )}
            {genres && (
              <Fragment>
                <Text color='neutral.4' fontSize={0}>{genres}</Text>
                <Box color='neutral.4' mx={2}>&middot;</Box>
              </Fragment>
            )}
            {date && <Text color='neutral.4' fontSize={0}>{date}</Text>}
          </Box>
          <Text mb={6}>{data.overview}</Text>
          <H3 mb={3}>Cast</H3>
          <MovieCast id={id} />
          <H3 mb={3}>Related movies</H3>
          <RelatedMovies id={id} />
        </Box>
      </Box>

      {trailerPopup && (
        <Popup onClose={() => setTrailerPopup(false)}>
          <YouTube css={{ display: 'block', borderRadius: 8 }} videoId={trailer.key} />
        </Popup>
      )}
    </Fragment>
  )
}

MovieDetails.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}
