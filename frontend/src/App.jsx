import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './views/Home'
import Edit from './views/Edit'
import Create from './views/Create'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
