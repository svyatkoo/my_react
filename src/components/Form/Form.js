import {useReducer} from 'react';

import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";
import "./Form.css";

const Form = () => {
    let initialFormState = {cats: [{id: "", name: ""}], dogs: [{id: "", name: ""}]};
    let [state, dispatch] = useReducer(formReducer, {...initialFormState});
    let inputInfo = {type: "", animal: {}};

    const onChange = (e) => {
        inputInfo.animal = {id: new Date().getTime(), name: e.target.value};
        inputInfo.type = e.target.name;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: inputInfo.type,
            payload: {inputInfo}
        })
    }

    const getId = (id, animalType) => {
        dispatch({
            type: "delete",
            payload: {id, animalType}
        })
    }

    function formReducer(state, action) {
        switch (action.type) {
            case "cat":
                return {...state, cats: [...state.cats, action.payload.inputInfo.animal]};
            case "dog":
                return {...state, dogs: [...state.dogs, action.payload.inputInfo.animal]};
            case "delete":
                if (action.payload.animalType === "cat") {
                    return {...state, cats: [...state.cats.filter(animal => animal.id !== action.payload.id)]};
                }
                return {...state, dogs: [...state.dogs.filter(animal => animal.id !== action.payload.id)]};
            default:
                throw new Error("My errorrrrrrr");
        }
    }


    return (
        <div className="mainWrapper">
            <form onSubmit={onSubmit}>
                <label>
                    Add Cat:
                    <input
                        type="text"
                        name={"cat"}
                        onChange={onChange}
                    />
                    <button>Save</button>
                </label>

                <label>
                    Add Dogs:
                    <input
                        type="text"
                        name={"dog"}
                        onChange={onChange}
                    />
                    <button>Save</button>
                </label>
            </form>

            <div className="animalsWrapper">
                <div>
                    <h1>Cats</h1>
                    {[...state.cats].map(cat => <Cat key={cat.id} cat={cat} getId={getId}/>)}
                </div>

                <div>
                    <h1>Dogs</h1>
                    {[...state.dogs].map(dog => <Dog key={dog.id} dog={dog} getId={getId}/>)}
                </div>
            </div>
        </div>
    );
};

export default Form;