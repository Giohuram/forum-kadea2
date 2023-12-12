import {useContext} from "react";
import UserContext from "../context/UserContext.js";

export default function Post({post}) {

    const user = useContext(UserContext);

    return (
        <div>
            <h3>{post.author} - {post.dateTime}</h3>
            <p>{post.content}</p>
            <i>vu par {user.pseudo}</i>
        </div>
    );
}