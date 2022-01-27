import React, {useReducer} from 'react';

import "./Counter.css";

function reducer(state, action) {
    switch (action.type) {
        case "inc":
           return {...state, counter1: state.counter1 + 1};
        case "dec":
            return {...state, counter1: state.counter1 - 1 };
        case "reset":
            return {...state, counter1: 0 };
        case "inc2":
            return {...state, counter2: state.counter2 + 2};
        case "dec2":
            return {...state, counter2: state.counter2 - 2};
        case "reset2":
            return {...state, counter2: 0 };
        case "inc3":
            return {...state, counter3: state.counter3 + state.counter1 + state.counter2};
        case "dec3":
            return {...state, counter3: state.counter3 - state.counter1 - state.counter2};
        case "reset3":
            return {...state, counter3: action.payload};
        default:
            throw new Error("My errrrrrrr");
    }
    // return state;
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 77});

    return (
        <div>
            <div>Counter1: {state.counter1}</div>
            <div>Counter2: {state.counter2}</div>
            <div>Counter3: {state.counter3}</div>
            <hr/>
            <div className="wrapper">
                <div className="btnContainer">
                    <h4>Counter1</h4>
                    <button onClick={() => dispatch({type: "inc"})}>inc</button>
                    <button onClick={() => dispatch({type: "dec"})}>dec</button>
                    <button onClick={() => dispatch({type: "reset"})}>reset</button>
                </div>

                <div className="btnContainer">
                    <h4>Counter2</h4>
                    <button onClick={() => dispatch({type: "inc2"})}>inc</button>
                    <button onClick={() => dispatch({type: "dec2"})}>dec</button>
                    <button onClick={() => dispatch({type: "reset2"})}>reset</button>
                </div>

                <div className="btnContainer">
                    <h4>Counter3</h4>
                    <button onClick={() => dispatch({type: "inc3"})}>inc</button>
                    <button onClick={() => dispatch({type: "dec3"})}>dec</button>
                    <button onClick={() => dispatch({type: "reset3", payload: state.counter1})}>reset</button>
                </div>
            </div>

        </div>
    );
};

export default Counter;