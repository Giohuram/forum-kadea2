import {useContext} from "react";
import UserContext from "../context/UserContext.js";
import data from "../models/services/DataService.js";
import Post from "./Post.jsx";

export default function Home() {


    return (
        <>
            <header>
                <h1>Forum instantané</h1>
            </header>
            <main>
                {
                    // eslint-disable-next-line react/jsx-key
                    data.map((e)=> <Post post={e}/>)
                }
            </main>

        </>
    );
}