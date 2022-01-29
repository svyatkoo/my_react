import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = (props) => {
    const {car: {id, model, price, year}} = props;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};