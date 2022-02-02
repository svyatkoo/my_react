import {useSelector} from "react-redux";

import {Todo} from "../Todo/Todo";

const TodoList = () => {
    const {toDoList} = useSelector(state => state["todoReducer"]);

    return (
        <div>
            <h3>ToDoList</h3>
            {toDoList.map(item => <Todo key={item.id} item={item} />)}
        </div>
    );
};

export {TodoList};