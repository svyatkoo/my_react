const Cat = (props) => {
    const {cat : {name, id}, getId} = props;
    const animalType = "cat";
    return (
        <div>
            {name}
            {name && <button onClick={() => {
                getId(id, animalType)
            }}>Delete</button>}
        </div>
    );
};

export default Cat;