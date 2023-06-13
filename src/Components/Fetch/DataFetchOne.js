import axios from "axios"
import { useEffect, useState } from "react"

let DataFetchOne = () => {
    let [data, setData] = useState({})
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState('')

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            setLoading(false)
            setError('')
            setData(res.data)
        })
        .catch(err => {
            setLoading(false)
            setError('Something Went Wrong => ' + err)
            setData({})
        })
    },[])

    return (
        <>
            <div>{ loading ? 'Waiting ... ' : data.title }</div>
            <br />
            <div>{ error ? error : 'No Error' }</div>
        </>
    )
}

export default DataFetchOne