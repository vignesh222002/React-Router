import { useState } from "react"

export default function FetchAPI() {
    let [joke, setJoke] = useState('')

    let getJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setJoke(data.setup + "..." + data.punchline)
        })
    }

    return (
        <>
            <button onClick={getJoke}>Get a Joke</button>
            <br />
            <div>{joke}</div>
        </>
    )
}