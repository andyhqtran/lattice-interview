import React, { Fragment } from 'react'

import { Skeleton } from 'components/Skeleton'

export default {
  title: 'Core/Skeleton',
  component: Skeleton
}

export const example = () => {
  return (
    <Fragment>
      <Skeleton height={24} mb={4} width={120} />
      <Skeleton height={16} mb={2} width={330} />
      <Skeleton height={16} mb={2} width={340} />
      <Skeleton height={16} mb={2} width={320} />
      <Skeleton height={16} mb={2} width={310} />
    </Fragment>
  )
}
