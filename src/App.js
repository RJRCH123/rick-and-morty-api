import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacteres(info.prev);
  };

  const onNext = () => {
    fetchCharacteres(info.next);
  };

  useEffect(() => {
    fetchCharacteres(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty Api" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
