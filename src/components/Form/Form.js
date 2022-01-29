import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar} from "../../store/car.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addCar({data}));
        console.log("dispatch");
        console.log(dispatch(addCar({data})));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model: <input type="text" {...register("model")} /></label>
                <label>Price: <input type="text" {...register("rice")} /></label>
                <label>Year: <input type="text" {...register("year")} /></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};