import React, {useState, useEffect} from 'react'
import './App.css';

import Starship from './components/Starship';

function App() {

  //our search bar
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  //perform the search with the api
  const performLookup = () => {
    fetch(`https://swapi.dev/api/starships/`)
    .then((response) => response.json())
    .then((data) => setResults(data.results))
    .catch((error) => console.log(error));

    setResults(results);
  };

  useEffect(() => {
    console.log('onMount')
    performLookup();
  }, [])

  return (
    <div className="App">
      <h1>Star Wars spaceships</h1>
      <div className='cards'>
      {results.map((result) => (
      <Starship
      name={result.name} 
      key={result.name}/>
      ))}
      </div>
    </div>
  );
};

export default App;
