import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { PatientContextProvider } from './context/PatientContext'

function App() {

  return (
    <PatientContextProvider>
      <Header />
      <Main />
    </PatientContextProvider>
  )
}

export default App
