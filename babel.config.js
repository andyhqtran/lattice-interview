module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        fileName: false,
        ssr: true
      }
    ]
  ]
}
