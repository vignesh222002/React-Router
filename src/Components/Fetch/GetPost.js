import axios from "axios"
import { useEffect, useState } from "react"

export default function GetPost() {
    let [post, setPost] = useState({})
    let [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => console.log(err))
    },[id])

    return (
        <>
            <input type= "text" value={id} onChange={e => setId(e.target.value)} />
            <h2>{post.title}</h2>
        </>
    )
}