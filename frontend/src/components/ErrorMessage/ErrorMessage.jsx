import './ErrorMessage.css'
import error from '../../assets/error.svg'
import warning from '../../assets/warning.svg'

const ErrorMessage = (props) => {

  return (
    <div className="error-msg-container">
      <div className="error-msg">
        {props.error && <img src={error} alt='error icon' />}
        {props.empty && <img src={warning} alt='warning icon' />}
        <p>{props.msg}</p>
      </div>
    </div>
  )
}

export default ErrorMessage