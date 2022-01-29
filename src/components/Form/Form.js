import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addCar({data}));
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register("model")}/></label>
                <label>Price: <input type="text" {...register("price")}/></label>
                <label>Year: <input type="text" {...register("year")}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};