import { Spinner } from 'react-bootstrap'
import './LoadingSpinner.css'

const LoadingSpinner = ({ light }) => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" className={light ? 'light-spinner' : ''}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div >
  );
};

export default LoadingSpinner;