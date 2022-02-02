import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {save} from "../../store/todo.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const {allCounter, complited} = useSelector(state => state["todoReducer"])

    const onSubmit = (data) => {
        dispatch(save(data));
        reset();
    }

    return (
        <div>
            <div>
                All: {allCounter}
            </div>
            <div>
                Complited: {complited}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("todo")} />
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};