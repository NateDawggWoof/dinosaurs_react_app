import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';

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
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/" render={() => <HomeContainer allDinosaurs={allDinosaurs}/>} />
          <Route path="/dinosaurs" render={() => <DinoContainer allDinosaurs={allDinosaurs}/>} />
          <Route path="/quiz" render={() => <QuizContainer allDinosaurs={allDinosaurs}/>} />
        </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default App;


// const [page, setPage] = useState ("home")

// const display = (allDinosaurs) => {
//   if (page =="home") {
//     return <HomeContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
//   } else if (page == "dinos") {
//     return <DinoContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
//   } else {
//     return <QuizContainer allDinosaurs={allDinosaurs} togglePage={togglePage}/>
//   }
// }

// const togglePage = (string) => {
//   setPage(string)
// }
