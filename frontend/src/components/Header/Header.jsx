import './Header.css'
import { usePatientContext } from '../../context/PatientContext'
import LogoutBtn from '../LogoutBtn/LogoutBtn';

const Header = () => {

  const { auth } = usePatientContext()

  return (
    <header>
      <h1>MyVetHub</h1>
      {auth && <LogoutBtn/>}
    </header>
  );
};

export default Header;
