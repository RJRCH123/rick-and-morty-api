import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = () => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacteres();
  }, []);

  return <Navbar brand="Rick and Morty Api" />;
}

export default App;
