import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;