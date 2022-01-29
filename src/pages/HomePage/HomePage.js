import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "../page.module.css";

const HomePage = () => {
    return (
        <div>
            <div className={css.footer}>
                <NavLink to={"cars"}>Cars</NavLink>
                <NavLink to={"users"}>Users</NavLink>
            </div>

            <div className={css.main}>
                <Outlet/>
            </div>
        </div>
    );
};

export {HomePage};