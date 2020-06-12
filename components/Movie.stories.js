import React from 'react'

import { Movie, MovieSkeleton } from 'components/Movie'

export default {
  title: 'Movie',
  component: Movie
}

export const example = () => {
  return (
    <Movie
      date='3-31-2017'
      image='https://image.tmdb.org/t/p/w300_and_h450_bestv2/unPB1iyEeTBcKiLg8W083rlViFH.jpg'
      title='The Boss Baby'
      width={200}
    />
  )
}

export const skeleton = () => {
  return (
    <MovieSkeleton width={200} />
  )
}
