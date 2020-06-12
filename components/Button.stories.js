import React, { Fragment } from 'react'

import { Button } from 'components/Button'

export default {
  title: 'Core/Button',
  component: Button
}

export const example = () => {
  return (
    <Button>Button</Button>
  )
}

export const variants = () => {
  return (
    <Fragment>
      <Button variant='primary'>Primary button</Button>
      <Button variant='secondary'>Secondary button</Button>
    </Fragment>
  )
}

export const size = () => {
  return (
    <Fragment>
      <Button size='regular'>Regular button</Button>
      <Button size='large'>Large button</Button>
    </Fragment>
  )
}
