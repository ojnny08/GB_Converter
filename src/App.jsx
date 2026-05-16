import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home/Home'
import History from './pages/History/History'

function App() {
  const [convertedFiles, setConvertedFiles] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home convertedFiles={convertedFiles} setConvertedFiles={setConvertedFiles} />} />
        <Route path="/history" element={<History convertedFiles={convertedFiles} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
