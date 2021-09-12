import React, { useState, useEffect } from 'react';
// import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import './App.css';
import QuizContainer from './containers/QuizContainer';

const App = () => {

  const [allDinosaurs, setAllDinosaurs] = useState([]);
  const [page, setPage] = useState ("quiz")

  useEffect(() => {
    dinoService.getDinosaurs()
      .then((allDinosaurs) => {
        setAllDinosaurs(allDinosaurs);
      })
    }, [])

    // const display = (allDinosaurs) => {
    //   if (page =="home") {
    //     return<DinoContainer allDinosaurs={allDinosaurs}/>
    //   } else if (page == "dinos") {
    //     return <DinoContainer allDinosaurs={allDinosaurs}/>
    //   } else {
    //     return <QuizContainer allDinosaurs={allDinosaurs}/>
    //   }
    // }

  return (
    <>
      <h1>Header</h1>
      {/* {display(allDinosaurs)} */}
      <QuizContainer allDinosaurs={allDinosaurs}/>
      <h1>Footer</h1>
    </>
  );
}

export default App;
