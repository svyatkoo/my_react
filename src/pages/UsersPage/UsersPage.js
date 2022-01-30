import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {User} from "../../components";
import {getAllUsers} from "../../store";
import "./users.page.css";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state["userReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <div className="usersPageWrapper">
            <h1>Users Page</h1>
            <div className="mainBody">
                <div className="usersBox">
                    {status === "rejected" && <h1>{error}</h1>}
                    {users.map(user => <User key={user.id} user={user}/>)}
                </div>

                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {UsersPage};