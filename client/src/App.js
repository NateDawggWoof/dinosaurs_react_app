import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import './App.css';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';

const App = () => {

  const [allDinosaurs, setAllDinosaurs] = useState([]);
  const [page, setPage] = useState ("home")

  useEffect(() => {
    dinoService.getDinosaurs()
      .then((allDinosaurs) => {
        setAllDinosaurs(allDinosaurs);
      })
    }, [])

    const display = (allDinosaurs) => {
      if (page =="home") {
        return<HomeContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
      } else if (page == "dinos") {
        return <DinoContainer allDinosaurs={allDinosaurs}/>
      } else {
        return <QuizContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
      }
    }

    const togglePage = (string) => {
      setPage(string)
    }

  return (
    <>
      <h1>Header</h1>
      {display(allDinosaurs)}
      <h1>Footer</h1>
    </>
  );
}

export default App;