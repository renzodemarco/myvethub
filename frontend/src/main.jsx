import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { PatientContextProvider } from './context/PatientContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PatientContextProvider>
      <App />
    </PatientContextProvider>
  </React.StrictMode>,
)
