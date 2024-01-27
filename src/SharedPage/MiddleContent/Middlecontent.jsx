import React from 'react';
import { Outlet } from 'react-router-dom';

const Middlecontent = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Middlecontent;