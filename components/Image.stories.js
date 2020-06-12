import React from 'react'

import { Image } from 'components/Image'

export default {
  title: 'Core/Image',
  component: Image
}

export const example = () => {
  return (
    <Image
      alt='The Boss Baby'
      height={450}
      src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/unPB1iyEeTBcKiLg8W083rlViFH.jpg'
      width={300}
    />
  )
}
