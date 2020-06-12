import React, { Fragment } from 'react'

import { HeadingBase, H1, H2, H3, H4 } from 'components/Heading'

export default {
  title: 'Core/Heading',
  component: HeadingBase
}

export const example = () => {
  return (
    <HeadingBase>Heading base</HeadingBase>
  )
}

export const variants = () => {
  return (
    <Fragment>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </Fragment>
  )
}
