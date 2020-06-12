/* eslint-disable react/prop-types */
import { css } from '@styled-system/css'
import { rgba } from 'polished'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  breakpoints: ['480px', '768px', '1024px', '1280px'],
  colors: {
    black: '#000000',
    neutral: [
      rgba('#000000', 0.04),
      rgba('#000000', 0.12),
      rgba('#000000', 0.24),
      rgba('#000000', 0.32),
      rgba('#000000', 0.4),
      rgba('#000000', 0.64),
      rgba('#000000', 0.84)
    ],
    white: '#FFFFFF'
  },
  fonts: ['Inter, -apple-system, BlinkMacSystemFont, sans-serif'],
  fontSizes: [14, 18, 24, 32, 48],
  fontWeights: [100, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: ['22px', '28px', '40px', '52px'],
  radii: [0, 4, 8, 12, 16],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100]
}

// Font aliases
theme.fonts.body = theme.fonts[0]
theme.fonts.heading = theme.fonts[0]

// Font weight aliases
theme.fontWeights.thin = theme.fontWeights[1]
theme.fontWeights.regular = theme.fontWeights[2]
theme.fontWeights.medium = theme.fontWeights[3]
theme.fontWeights.semibold = theme.fontWeights[4]
theme.fontWeights.bold = theme.fontWeights[5]
theme.fontWeights.heavy = theme.fontWeights[6]
theme.fontWeights.black = theme.fontWeights[7]

const GlobalStyles = createGlobalStyle(
  {
    body: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  },
  css({
    body: {
      margin: 0,
      color: 'black',
      fontFamily: 'body',
      lineHeight: 1
    },

    '#popup': {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: 'none',

      '*': {
        pointerEvents: 'auto'
      }
    }
  })
)

export default function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
