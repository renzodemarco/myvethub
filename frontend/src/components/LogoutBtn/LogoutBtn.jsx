import { usePatientContext } from '../../context/PatientContext'
import logout from '../../assets/logout.svg'
import './LogoutBtn.css'
import { logoutConfirm } from '../../utils/alerts'

const LogoutBtn = () => {

  const { logoutUser } = usePatientContext()

  const onClick = async () => {
    const confirmed = await logoutConfirm()
    if (confirmed) logoutUser();
  };

  return (
    <button className='btn logout-btn' onClick={onClick}>
      <img src={logout} alt="Cerrar sesión" title="Cerrar sesión" />
    </button>
  )
}

export default LogoutBtn