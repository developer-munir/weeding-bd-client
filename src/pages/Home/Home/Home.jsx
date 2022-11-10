import React from 'react';
import { Outlet } from 'react-router-dom';
import Follow from '../Follow/Follow';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Follow></Follow>
        </div>
    );
};

export default Home;