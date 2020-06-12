import { useRouter } from 'next/router'
import React from 'react'

import { Box } from 'components/Box'
import { H1 } from 'components/Heading'
import { SearchField } from 'components/SearchField'

export default function Search () {
  const router = useRouter()

  return (
    <Box maxWidth={1080} mx='auto' pt={20}>
      <H1 mb={8}>Search results</H1>
      <SearchField
        mb={14}
        onSubmit={(value) => router.push(`/search/${encodeURI(value)}`)}
        placeholder='Search for a movie'
        width='100%'
      />
    </Box>
  )
}
