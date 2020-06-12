import { useRouter } from 'next/router'
import React from 'react'

import { Button } from 'components/Button'

export const BackHomeButton = (props) => {
  const router = useRouter()

  return (
    <Button
      mb={10}
      onClick={() => router.push('/')}
      size='regular'
      variant='secondary'
      {...props}
    >
      &larr; Go back home
    </Button>
  )
}
