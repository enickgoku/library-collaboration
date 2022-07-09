import List from '../../components/List'
import { getGenres } from '../../utils/books'

const Stats = () => {
  const response = {
    data: [
      'Fiction',
      'Non Fiction',
      'Fiction',
      'Fantasy',
      'Autobiography',
      'Autobiography',
    ]
  }

  const filtered = getGenres(response.data)

  return <List data={filtered} />
}

export default Stats
