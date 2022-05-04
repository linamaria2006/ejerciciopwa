import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';


// https://gateway.marvel.com:443/v1/public/characters?apikey=b2a46f09f019d1257c354c35d9ef812e

// priv bad70091d941dada1fbd4e0568565b8c32b81531

// pub b2a46f09f019d1257c354c35d9ef812e

// ts:1
// 1bad70091d941dada1fbd4e0568565b8c32b81531b2a46f09f019d1257c354c35d9ef812e
// hash = 569217aeb916c947218fc31faa4b1651

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() =>{
    fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b2a46f09f019d1257c354c35d9ef812e&hash=569217aeb916c947218fc31faa4b1651")
    .then((res) => res.json())
    .then ((res) =>
    {
      setPersonajes(res.data.results)
      console.log(res.data.results)
    }
    ) 
  }, [])

  console.log(personajes)
  return (
    <div >
      { personajes.map(pers => (
          <div className="card" style={{width: "18rem"}} key = {pers.id}>
          <img src={`${pers.thumbnail.path}.${pers.thumbnail.extension}`} className="card-img-top" alt="..."/>
          <div className="card-body">

            <p className="card-text">{pers.name}</p>
          </div>
        </div>

      )
      
      )
   
}
    </div>
    
  );
}

export default App;
