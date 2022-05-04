import React, { useEffect, useState } from 'react';

export default function Joke() {

    const [joke, setJoke] = useState(null);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("joke") === null) setJoke("Loading...");
            else setJoke(localStorage.getItem("joke"));
          }

        fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((chiste) => {setJoke(chiste.value)
        localStorage.setItem("joke", chiste.value)
        console.log("Response", chiste)
        }
        );

    },[]

    );
        return(
            <>
           <h1> {joke}</h1>
           </>
        )
    
}