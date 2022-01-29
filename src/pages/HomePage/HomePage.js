import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            HomePage
            
            <NavLink to={"cars"}>Cars</NavLink>

            <Outlet />
        </div>
    );
};

export {HomePage};