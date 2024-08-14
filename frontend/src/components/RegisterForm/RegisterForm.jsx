import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext'
import Modal from '../Modal/Modal'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './RegisterForm.css'

const RegisterForm = ({ handleSwitch }) => {

  const { registerUser } = usePatientContext()

  const [email, setEmail] = useState('user@gmail.com')
  const [password, setPassword] = useState('12345678')
  const [isLoading, setIsLoading] = useState(false)

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
          <button className='btn btn-primary'>CREAR USUARIO</button>
          <button className='btn btn-secondary' onClick={handleSwitch}>YA ESTOY REGISTRADO</button>
        </div>
      </form>
      <Modal isOpen={isLoading}>
        <LoadingSpinner light />
      </Modal>
    </>
  )
}

export default RegisterForm