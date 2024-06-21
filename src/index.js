import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import RegistrationForm from './Components/RegisterationForm';
import Nav from './Components/Nav';
import { RegistrationProvider } from './contexts/RegistrationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RegistrationProvider>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </RegistrationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
