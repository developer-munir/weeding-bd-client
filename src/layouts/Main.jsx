import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className='mb-3'>
          <Navbar></Navbar>
        </div>
        <div className='min-h-screen'>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;