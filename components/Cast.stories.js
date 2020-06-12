import React from 'react'

import { Cast } from 'components/Cast'

export default {
  title: 'Cast',
  component: Cast
}

export const example = () => {
  return (
    <Cast
      image='https://image.tmdb.org/t/p/w276_and_h350_face/aGzdIC5u2KaslrU9etNdPPMhLLs.jpg'
      name='Alec Baldwin'
      role='Theodore Templeton (voice)'
      width={138}
    />
  )
}
