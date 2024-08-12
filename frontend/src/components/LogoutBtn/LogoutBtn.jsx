import { usePatientContext } from '../../context/PatientContext'
import logout from '../../assets/logout.svg'
import './LogoutBtn.css'

const LogoutBtn = () => {

  const { logoutUser } = usePatientContext()

  return (
    <button className='btn logout-btn' onClick={logoutUser}>
      <img src={logout} alt="Cerrar sesión" title="Cerrar sesión"/>
    </button>
  )
}

export default LogoutBtn