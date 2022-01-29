import {useSelector} from "react-redux";

import {Car} from "../Car/Car";
import "./cars.css";

const Cars = () => {
    const {cars} = useSelector(state => state["carReducer"]);
    console.log("cars");
    console.log(cars);

    return (
        <div className="carsWrapper">
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};