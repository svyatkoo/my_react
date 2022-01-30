import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comment.slice";
import {Comment} from "../../components";
import "./comments.page.css";

const CommentsPage = () => {
    const {comments} = useSelector(state => state["commentReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])
    return (
        <div className="commentsWrapper">
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};