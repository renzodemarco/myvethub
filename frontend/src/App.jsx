import { usePatientContext } from './context/PatientContext.jsx'
import { wakeUpServer } from './services/wakeUpService.js';
import { useEffect } from 'react';
import Home from './screens/Home'
import Auth from './screens/Auth'
import Header from './components/Header/Header.jsx';
import Modal from './components/Modal/Modal.jsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';

function App() {

  const { auth, isLoading } = usePatientContext()

  useEffect(() => {
    wakeUpServer()
  }, [])

  return (
    <>
      <Header />
      {auth ? <Home /> : <Auth />}
      <Modal isOpen={isLoading}>
        <LoadingSpinner light={true} />
      </Modal>
    </>
  )
}

export default App
