import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import './AuthContainer.css'
import RegisterForm from '../RegisterForm/RegisterForm'

const AuthContainer = () => {

  const [isRegistered, setIsRegistered] = useState(true)

  const switchIsRegistered = () => {
    setIsRegistered(prevState => !prevState);
  };

  return (
    <div className='auth-container'>
      <div className="auth-title">
        <h2>{isRegistered ? 'Iniciar sesión' : 'Registrarse'}</h2>
      </div>
      <div className="auth-content">
        {isRegistered ?
          <LoginForm handleSwitch={switchIsRegistered} /> :
          <RegisterForm handleSwitch={switchIsRegistered} />}
      </div>
    </div>
  )
}

export default AuthContainer