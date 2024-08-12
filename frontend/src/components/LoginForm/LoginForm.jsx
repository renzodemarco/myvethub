import { usePatientContext } from '../../context/PatientContext'
import './LoginForm.css'

const LoginForm = () => {

  const { loginUser } = usePatientContext()

  const onClick = async (e) => {
    e.preventDefault()
    await loginUser({ email: 'user@gmail.com', password: '12345678' })
  }

  return (
    <form className='login-form'>
      <div className='login-form-container'>
        <label className="auth-form-label" htmlFor='email'>Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          value="user@gmail.com"
          id="email"
          name="email"
          autoComplete="off"
        />
        <label className="auth-form-label" htmlFor='password'>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value="12345678"
          name="password"
          autoComplete="off"
        />
      </div>
      <div className='auth-btn-container'>
        <button className='btn btn-primary' onClick={onClick}>INICIAR SESIÓN</button>
        <button className='btn btn-secondary'>REGISTRARME</button>
      </div>
    </form>
  )
}

export default LoginForm