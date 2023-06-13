import axios from "axios";
import { useEffect, useState } from "react";

export default function GetPostButton() {
    let [post, setPost] = useState({})
    let [id, setId] = useState(1)
    let [idByButton, setIdByButton] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idByButton}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
    }, [idByButton])

    let handler = () => {
        setIdByButton(id)
    }

    return (
        <>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handler}>Fetch Post</button>
            <br />
            <h2>{post.title}</h2>
        </>
    )
}