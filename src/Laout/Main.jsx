import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { ThemeProvider } from '../SwitchMode/ThemeContext';
const Main = () => {
     const location = useLocation()
     return (
          <div className='text-bg-info'>
        <Header />
        <Outlet></Outlet>
        <Footer></Footer>
          </div>
     );
};

export default Main;