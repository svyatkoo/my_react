import "./comment.css";

const Comment = ({comment}) => {
    const {id, name, email} = comment;

    return (
        <div className="comment">
            <div>{id} --- {name}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {Comment};