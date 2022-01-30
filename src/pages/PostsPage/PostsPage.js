import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "../../components";
import {getAllPosts} from "../../store";

const PostsPage = () => {
    const {posts} = useSelector(state => state["postReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};