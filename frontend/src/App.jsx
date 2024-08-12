import { usePatientContext } from './context/PatientContext.jsx'
import { wakeUpServer } from './services/wakeUpService.js';
import { useEffect } from 'react';
import Home from './screens/Home'
import Auth from './screens/Auth'
import Header from './components/Header/Header.jsx';

function App() {

  const { auth } = usePatientContext()
  
  useEffect(() => {
    wakeUpServer()
  }, [])
  

  return (
    <>
      <Header />
      {auth ? <Home /> : <Auth />}
    </>
  )
}

export default App
