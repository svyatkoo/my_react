import {useDispatch} from "react-redux";

import {deleteCarThunk, getCarForUpdate} from "../../store";
import "./Car.css";

const Car = (props) => {
    const {car: {id, model, price, year}} = props;
    const dispatch = useDispatch();

    return (
        <div className="carBox">
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={() => dispatch(getCarForUpdate({props}))}>Update</button>
        </div>
    );
};

export {Car};