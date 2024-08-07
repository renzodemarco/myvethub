import { usePatientContext } from './context/PatientContext.jsx'
import Home from './screens/Home'
import Auth from './screens/Auth'
import Header from './components/Header/Header.jsx';

function App() {

  const { auth } = usePatientContext()

  return (
    <>
      <Header />
      {auth ? <Home /> : <Auth />}
    </>
  )
}

export default App
