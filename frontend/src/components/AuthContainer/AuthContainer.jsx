import LoginForm from '../LoginForm/LoginForm'
import './AuthContainer.css'

const AuthContainer = () => {

  return (
    <div className='auth-container'>
      <div className="auth-title">
        <h2>Iniciar sesión</h2>
      </div>
      <div className="auth-content">
        <LoginForm/>
      </div>
    </div>
  )
}

export default AuthContainer