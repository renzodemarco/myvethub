import { useState } from 'react'
import { usePatientContext } from '../../context/PatientContext'
import { errorAlert, serverError, successAlert, warningAlert } from '../../utils/alerts'
import validateRegisterForm from '../../utils/validateRegisterForm'
import './RegisterForm.css'

const RegisterForm = ({ handleSwitch }) => {

  const { registerUser } = usePatientContext()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')

  const submitActive = username && email && password && passwordConf;

  const onSubmit = async (e) => {
    e.preventDefault()

    const formError = validateRegisterForm({username, email, password, passwordConf})

    if (formError) return warningAlert(formError)

    try {
      await registerUser({ username, email, password })
      successAlert("El usuario ha sido registrado")
      handleSwitch()
    }
    catch (error) {
      if (error.data.message === "The email is already registered") {
        return errorAlert("Este correo ya está registrado, intenta con otro")
      }
      serverError()
    }
  }

  return (
    <>
      <form className='auth-form'>
        <div className='register-form-container'>
          <label className="auth-form-label" htmlFor='username'>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            autoComplete="off"
          />
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
          <label className="auth-form-label" htmlFor='password-conf'>Confirme su contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password-conf"
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
            name="password-conf"
            autoComplete="off"
          />
        </div>
        <div className='register-btn-container'>
          <button className='btn btn-primary' onClick={onSubmit} disabled={!submitActive}>CREAR USUARIO</button>
          <button className='btn btn-secondary' onClick={handleSwitch}>YA ESTOY REGISTRADO</button>
        </div>
      </form>
    </>
  )
}


export default RegisterForm