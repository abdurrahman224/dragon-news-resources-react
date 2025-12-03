import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
         <header className='py-3 w-11/12 mx-auto'>

              <Navber></Navber>
         </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;