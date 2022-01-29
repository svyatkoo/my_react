import {Routes, Route} from "react-router-dom";

import './App.css';
import {CarsPage, HomePage} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path={"/"} element={<HomePage/>} >
            <Route path={"cars"} element={<CarsPage/>} />
            <Route path={"*"} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
