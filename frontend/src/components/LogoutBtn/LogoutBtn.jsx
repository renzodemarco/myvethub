import { usePatientContext } from '../../context/PatientContext'
import './LogoutBtn.css'

const LogoutBtn = () => {

  const { logoutUser } = usePatientContext()

  return (
    <button className='btn btn-danger logout-btn' onClick={logoutUser}>
      CERRAR SESIÓN
    </button>
  )
}

export default LogoutBtn