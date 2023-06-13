import axios from "axios";
import { useState } from "react";

export default function AxiosAPI() {
    let [joke, setJoke] = useState("")

    // async function getJoke (){
    //     let response= await axios.get("https://official-joke-api.appspot.com/random_joke")
        
    //         console.log(response.data);
      
    // }
    let getJoke = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(
            (response) => {
                setJoke(response.data.setup + " ... " + response.data.punchline)
                console.log(response.data)
            }
        )
    } 

    return (
        <>
            <button onClick={getJoke}>Get a Joke</button>
            <br />
            <div>{joke}</div>
        </>
    )
}