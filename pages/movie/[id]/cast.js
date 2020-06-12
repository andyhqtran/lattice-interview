/**
 * @NOTE: Create design mock for this with a better layout that
 * supports 100+ cast and crew members
 */
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Cast } from 'components/Cast'
import { H2, H3 } from 'components/Heading'
import { MoviePoster } from 'components/MoviePoster'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export default function MovieByIdCast () {
  const router = useRouter()
  const { id } = router.query

  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=credits`, fetch)

  /**
   * @TODO : Add in component skeleton
   */
  if (!data) return <div>Loading...</div>

  /**
   * @todo : Move to seperate component
   */
  return (
    <Box maxWidth={1080} mx='auto'pt={20}>
      <Box display='flex' mb={20}>
        <Box mr={8} width={62}>
          <MoviePoster src={getImagePath(data.poster_path, { width: 92 })} />
        </Box>
        <Box>
          <H2 mb={3}>{data.title}</H2>
          <Button
            onClick={() => router.push(`/movie/${id}`)}
            variant='secondary'
          >
            Back to overview
          </Button>
        </Box>
      </Box>
      <H3 mb={3}>Cast</H3>
      <Box
        display='grid'
        gridColumnGap={6}
        gridRowGap={12}
        gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
      >
        {data.credits.cast && data.credits.cast.map((cast) => (
          <Cast
            image={getImagePath(cast.profile_path, { width: 300 })}
            key={cast.cast_id}
            name={cast.name}
            role={cast.character}
          />
        ))}
      </Box>
      <Box>
        <H3>Crew</H3>
        <Box
          display='grid'
          gridColumnGap={6}
          gridRowGap={12}
          gridTemplateColumns='1fr 1fr 1fr 1fr 1fr 1fr'
        >
          {data.credits.crew && data.credits.crew.map((crew) => (
            <Cast
              image={getImagePath(crew.profile_path, { width: 300 })}
              key={crew.credit_id}
              name={crew.name}
              role={`${crew.job} (${crew.department})`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

/**
 * Disables automatic static optimization that results `query`
 * being undefined on initial render.
 *
 * Documentation: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */
MovieByIdCast.getInitialProps = (ctx) => {
  return {
    id: ctx.query.id
  }
}
