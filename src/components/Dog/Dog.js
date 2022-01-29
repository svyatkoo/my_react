const Dog = (dog) => {
    const {dog: {id, name}, getId} = dog;
    return (
        <div>
            {name}
            {name && <button onClick={() => {
                getId(id)
            }}>Delete
            </button>}
        </div>
    );
};

export default Dog;