import { usePatientContext } from '../context/PatientContext.jsx'

const Auth = () => {

  const { loginUser } = usePatientContext()

  const onClick = async () => {
    await loginUser({email: 'user@gmail.com', password: '12345678'})
}

  return (
    <>
      <div>Choto</div>
      <button className='btn btn-primary' onClick={onClick}>
        LOGEARSE
        </button>
    </>
  )
}

export default Auth