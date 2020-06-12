/**
 * @NOTE: Find all valid image path sizes and add a check to prevent 404 error
 */

const IMAGE_URL = 'https://image.tmdb.org/t/p'

export const getImagePath = (id, opts) => {
  const width = opts && opts.width ? `/w${opts.width}` : '/original'
  const height = opts && opts.height ? `/h${opts.height}` : ''

  /**
   * Returns an empty string if id is null to use iamge fallback
   */
  if (!id) return ''

  /**
   * Returns a formated string according to The Movie DB documentation
   * Documentation: https://developers.themoviedb.org/3/getting-started/images
   */
  return `${IMAGE_URL}${width}${height}${id}`
}
