import { Route, Routes } from 'react-router-dom'
import Page from './components/Page'
import Stats from './views/Stats'
import Books from './views/Books'
import Accounts from './views/Accounts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Stats />} />
        {/* Insert containeters with stats */}
        <Route path="/books" element={<Books />} />
        <Route path="/accounts" element={<Accounts />} />
      </Route>
    </Routes>
  )
}

export default App
