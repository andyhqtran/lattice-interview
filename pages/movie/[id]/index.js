/**
 * @NOTE: Move contents of this file to it's on component and do shallow rendering
 * in addition to have it's own route.
 *
 * Example: Dribbble post (https://dribbble.com/)
 */
import { useRouter } from 'next/router'
import React from 'react'

import { BackHomeButton } from 'components/BackHomeButton'
import { Box } from 'components/Box'
import { MovieDetails } from 'components/MovieDetails'

export default function MovieById () {
  const router = useRouter()

  const { id } = router.query

  return (
    <Box
      pt={20}
      maxWidth={1080}
      mx='auto'
    >
      <BackHomeButton />
      <MovieDetails id={id} />
    </Box>
  )
}

/**
 * Disables automatic static optimization that results `query`
 * being undefined on initial render.
 *
 * Documentation: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */
MovieById.getInitialProps = (ctx) => {
  return {
    id: ctx.query.id
  }
}
