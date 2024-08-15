import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext'
import { errorAlert, serverError, warningAlert } from '../../utils/alerts'
import './LoginForm.css'

const LoginForm = ({ handleSwitch }) => {

  const { loginUser } = usePatientContext()

  const [email, setEmail] = useState('user@gmail.com')
  const [password, setPassword] = useState('12345678')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginUser({ email, password })
    }
    catch (error) {
      switch (error.status) {
        case 400:
          warningAlert('Correo electrónico o contraseña inválidas')
          break
        case 404:
          errorAlert('No se ha encontrado el usuario')
          break
        default:
          console.error(error.message || 'Ocurrió un error inesperado')
          serverError()
      }
    }
  }

  return (
    <>
      <form className='auth-form'>
        <div className='login-form-container'>
          <label className="auth-form-label" htmlFor='email'>Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            autoComplete="off"
          />
          <label className="auth-form-label" htmlFor='password'>Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            autoComplete="off"
          />
        </div>
        <div className='auth-btn-container'>
          <button className='btn btn-primary' onClick={onSubmit}>INICIAR SESIÓN</button>
          <button className='btn btn-secondary' onClick={handleSwitch}>REGISTRARME</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm