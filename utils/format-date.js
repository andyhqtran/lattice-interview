export const formatDate = (date, opts = { year: 'numeric', month: 'long', day: 'numeric' }) => {
  if (!date) return

  return new Date(date).toLocaleDateString(undefined, opts)
}
