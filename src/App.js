import {Route, Routes} from "react-router-dom";

import './App.css';
import {CarsPage, CommentsPage, HomePage, NotFoundPage, PostsPage, UsersDetailsPage, UsersPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}>
                    <Route path={"cars"} element={<CarsPage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UsersDetailsPage/>}/>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}/>
                    <Route path={"comments"} element={<CommentsPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
