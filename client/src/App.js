import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import './App.css';

const App = () => {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    dinoService.getDinosaurs()
      .then((allDinosaurs) => {
        setAllDinosaurs(allDinosaurs);
      })
    }, [])

  return (
    <>
      <h1>Header</h1>
      <DinoContainer allDinosaurs={allDinosaurs} />
      <h1>Footer</h1>
    </>
  );
}

export default App;
