import React from 'react'

import { RelatedMovies, RelatedMoviesSkeleton } from 'components/RelatedMovies'

export default {
  title: 'RelatedMovies',
  component: RelatedMovies
}

export const example = () => {
  return (
    <RelatedMovies id={295693} />
  )
}

export const skeleton = () => {
  return (
    <RelatedMoviesSkeleton />
  )
}
