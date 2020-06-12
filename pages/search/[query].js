/**
 * @NOTE: Move contents of this file to it's on component and do shallow rendering
 * in addition to have it's own route.
 *
 * Example: UI8 Search (https://ui8.net/)
 */
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import useSWR, { useSWRPages } from 'swr'

import { BackHomeButton } from 'components/BackHomeButton'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { H1 } from 'components/Heading'
import { SearchField } from 'components/SearchField'
import { Movie, MovieSkeleton } from 'components/Movie'
import fetch from 'utils/fetch'
import { getImagePath } from 'utils/get-image-path'

export default function SearchByQuery () {
  const router = useRouter()
  const { query } = router.query

  const {
    loadMore,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
    pages
  } = useSWRPages(
    'popular-movies',
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURI(query)}${offset ? `&page=${offset}` : ''}`, fetch)
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
    [query]
  )

  return (
    <Box maxWidth={1080} mx='auto' pt={20}>
      <BackHomeButton />
      <H1 mb={8}>Search results</H1>
      <SearchField
        mb={14}
        onSubmit={(value) => router.push(`/search/${encodeURI(value)}`)}
        placeholder='Search for a movie'
        value={query}
        width='100%'
      />
      <Box
        display='grid'
        gridColumnGap={6}
        gridRowGap={12}
        gridTemplateColumns='1fr 1fr 1fr 1fr'
        mb={24}
      >
        {pages}
        {!isReachingEnd && !isEmpty && (
          <Button gridColumn='1 / 5' onClick={loadMore} variant='secondary' width='100%'>
            {isLoadingMore ? 'Loading...' : 'Show more movies'}
          </Button>
        )}
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
SearchByQuery.getInitialProps = (ctx) => {
  return {
    query: ctx.query.query
  }
}
