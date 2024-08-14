import AuthContainer from '../components/AuthContainer/AuthContainer'
import { usePatientContext } from '../context/PatientContext'
import Modal from '../components/Modal/Modal.jsx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';

const Auth = () => {

  const {isLoading} = usePatientContext()

  return (
    <>
      <div className='auth-main'>
        <AuthContainer />
      </div>
      <Modal isOpen={isLoading}>
        <LoadingSpinner light />
      </Modal>
    </>
  )
}

export default Auth