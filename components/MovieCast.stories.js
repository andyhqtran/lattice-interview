import React from 'react'

import { MovieCast, MovieCastSkeleton } from 'components/MovieCast'

export default {
  title: 'MovieCast',
  component: MovieCast
}

export const example = () => {
  return (
    <MovieCast id={295693} />
  )
}

export const skeleton = () => {
  return (
    <MovieCastSkeleton />
  )
}
