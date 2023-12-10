import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageWelcome from './pages/PageWelcome/Index'
import PageGraphic from './pages/PageGraphic/Index'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWelcome />} />
        <Route path="/PageGraphic" element={<PageGraphic />} />
      </Routes>
    </Router>
  )
}


export default App

