import axios from "axios"
import { useEffect, useReducer } from "react"

let initialState = {
    loading : true,
    data : {},
    error : ''
}
let reducer = (state, action) => {
    switch(action.type) {
        case 'fetch-success' : 
            return {
                loading : false,
                data : action.data,
                error : ''
            }
        case 'fetch-error' :
            return {
                loading : false,
                data : {},
                error : 'Error Occurs'
            }
        default : 
            return state
    }
}

let DataFetchTwo = () => {
    let [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            dispatch({type : 'fetch-success', data : res.data})
        })
        .catch(err => {
            dispatch({type : 'fetch-error'})
            console.log(err)
        })
    }, [])

    return (
        <>
            <div>{ state.loading ? 'Waiting ... ' : state.data.title }</div>
            <br />
            <div>{ state.error ? state.error : "No Error" }</div>
        </>
    )
}

export default DataFetchTwo