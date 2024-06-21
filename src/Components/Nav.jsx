import React, { useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RegistrationForm from "./RegisterationForm";
import { RegistrationContext } from '../contexts/RegistrationContext';

export default function Nav() {
  const { isRegistered, setIsRegistered } = useContext(RegistrationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsRegistered(false); // Update registration state
    navigate('/RegistrationForm'); // Redirect to registration form
  };

  if (!isRegistered) {
    return <RegistrationForm />;
  }

  return (
    <div className="Container p-5 m-5">
      <div><img src='' alt=''></img></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
          <hr />
          <br />
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
