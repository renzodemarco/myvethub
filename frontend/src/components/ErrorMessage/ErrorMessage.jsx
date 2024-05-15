import { usePatientContext } from "../../context/PatientContext"

const ErrorMessage = () => {

  const { error } = usePatientContext()

  return (
    <div className="error-msg-container">
      <p>ERROR</p>
    </div>
  )
}

export default ErrorMessage