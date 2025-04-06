import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../LandingPages/LandingPage';
import LoginPage from '../AuthPages/Login';
import RegisterPage from '../AuthPages/RegisterPage';
import HeroContainer from '../AfterLoginPages/HeroContainer';
import RazorpayCheckout from '../AfterLoginPages/RazorpayCheckout';
import BookingDetails from '../AfterLoginPages/bookingDetails';
import Support from '../AfterLoginPages/Support';


const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/HeroContainer' element={<HeroContainer/>}/>
        <Route path='/payment' element={<RazorpayCheckout/>} />
        <Route path='/bookings' element={<BookingDetails/>} />
        <Route path='/Support' element={<Support/>}/>
      </Routes>
    </div>
  );
};

export default MainRouter;
