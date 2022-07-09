import { Route, Routes } from 'react-router-dom'
import Page from './components/Page'
import Stats from './views/Stats'
import Books from './views/Books'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Stats />} />
        <Route path="/books" element={<Books />} />
      </Route>
    </Routes>
  )
}

export default App
