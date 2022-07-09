export const getGenres = (data, search) => {
  const deduped = Array.from(new Set(data))

  return search
    ? deduped.filter(genre => {
        const trimmed = genre.replace(' ', '').toLowerCase()
        return trimmed.includes(search)
      })
    : deduped
}
