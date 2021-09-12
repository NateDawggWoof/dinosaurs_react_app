import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import './App.css';
import Layout from './components/Layout';

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
        return <HomeContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
      } else if (page == "dinos") {
        return <DinoContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
      } else {
        return <QuizContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
      }
    }

    const togglePage = (string) => {
      setPage(string)
    }

  return (
    <>
      <Layout togglePage={togglePage}>
        {display(allDinosaurs)}
      </Layout>
    </>
  );
}

export default App;