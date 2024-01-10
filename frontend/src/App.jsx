import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NewPatientContainer from './components/NewPatientContainer/NewPatientContainer'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Routes>
        <Route path={'/create'} element={<NewPatientContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
