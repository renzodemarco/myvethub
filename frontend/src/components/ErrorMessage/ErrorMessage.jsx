import './ErrorMessage.css'
import error from '../../assets/error.svg'
import empty from '../../assets/empty.svg'

const ErrorMessage = (props) => {

  return (
    <div className="error-msg-container">
      <div className="error-msg">
        {props.error && <img src={error} alt='error icon' />}
        {props.empty && <img src={empty} alt='empty icon' />}
        <p>{props.msg}</p>
      </div>
    </div>
  )
}

export default ErrorMessage