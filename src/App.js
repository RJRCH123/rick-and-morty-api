import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";


function App() {
  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = () => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacteres(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty Api" />

      <div className="container">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
