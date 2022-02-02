import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {save} from "../../store/todo.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(save(data));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("todo")} />
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};