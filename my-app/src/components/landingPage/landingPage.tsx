import React from 'react';
import Sidebar from './sideBar';
import Main from './Main';
import '../landingPage/landPage.css'

function LandingPage(props:any) {
    return (
        <div className='container'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default LandingPage;