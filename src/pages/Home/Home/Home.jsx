import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Header from '../Header/Header';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;