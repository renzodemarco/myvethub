import { Spinner } from 'react-bootstrap'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div >
  );
};

export default LoadingSpinner;