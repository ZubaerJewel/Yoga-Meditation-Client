import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
     const location = useLocation()
     return (
          <div className='text-bg-info'>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;