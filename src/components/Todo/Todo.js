import {useDispatch} from "react-redux";


import {changeStatus, deleteItem} from "../../store/todo.slice";
import "./todo.css";

const Todo = ({item: {id, name, status}}) => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <input type="checkbox" value={status} onChange={()=> dispatch(changeStatus({id}))}/>
            <div className={status?"checked":""}>{name}</div>
            <button onClick={() => dispatch(deleteItem({id}))}>Delete</button>
        </div>
    );
};

export {Todo};