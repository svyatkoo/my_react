import {useDispatch} from "react-redux";

import {deleteCar} from "../../store/car.slice";
import "./Car.css";

const Car = (props) => {
    const {car: {id, model, price, year}} = props;
    const dispatch = useDispatch();

    return (
        <div className="carBox">
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};