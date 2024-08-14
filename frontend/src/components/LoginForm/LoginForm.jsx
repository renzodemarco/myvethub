import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext'
import { loginUser404Error, loginUserFieldsError, serverError } from '../../utils/alerts'
import Modal from '../Modal/Modal'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './LoginForm.css'

const LoginForm = () => {

  const { loginUser } = usePatientContext()

  const [email, setEmail] = useState('user@gmail.com')
  const [password, setPassword] = useState('12345678')
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await loginUser({ email, password })
    }
    catch (error) {
      switch (error.status) {
        case 400:
          loginUserFieldsError()
          break
        case 404:
          loginUser404Error()
          break
        default:
          console.error(error.message || 'Ocurrió un error inesperado')
          serverError()
      }
    }
    finally {
      setIsLoading(false)
    }

  }

  return (
    <>
      <form className='login-form'>
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
          <button className='btn btn-primary' onClick={onClick}>INICIAR SESIÓN</button>
          <button className='btn btn-secondary'>REGISTRARME</button>
        </div>
      </form>
      <Modal isOpen={isLoading}>
        <LoadingSpinner light />
      </Modal>
    </>
  )
}

export default LoginForm