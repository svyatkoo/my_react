import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {createNewCar, updateCarThunk} from "../../store";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validadors/car.validator";

const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({resolver:joiResolver(carValidator), mode:"onChange"});
    const dispatch = useDispatch();
    const {carToUpdate: {id, model, price, year}} = useSelector(state => state["carReducer"]);

    useEffect(() => {
        setValue("model", model)
        setValue("price", price)
        setValue("year", year)
    }, [id])

    const onSubmit = (data) => {
        console.log("id");
        console.log(id);
        if (id) {
            dispatch(updateCarThunk({id, data}))
            return;
        }
        dispatch(createNewCar({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model: <input type="text" {...register("model")} /></label>
                {errors.model && <span>{errors.model.message}</span>}
                <label>Price: <input type="text" {...register("price")} /></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>Year: <input type="text" {...register("year")} /></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id ? "Update" : "Create"}</button>
            </form>
        </div>
    );
};

export {Form};