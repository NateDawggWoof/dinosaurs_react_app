import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import DinoScrabble from './containers/DinoScrabble';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';

const App = () => {

  // const [allDinosaurs, setAllDinosaurs] = useState([]);
  // const [userName, setUserName] = useState("");

  // // sets userName from HomeContainer
  // const saveUserName = (firstName) => {
  //   setUserName(firstName)
  // }

  //   useEffect(() => {
  //     dinoService.getDinosaurs()
  //       .then((allDinosaurs) => {
  //         setAllDinosaurs(allDinosaurs);
  //       })
  //     }, [])

  return (
    <>
    <DinoScrabble/>
      {/* <Router>
        <Layout>
        <Switch>
          <Route exact path="/">
            <HomeContainer saveUserName={saveUserName} allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/dinosaurs">
            <DinoContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/quiz">
            <QuizContainer allDinosaurs={allDinosaurs}/>
          </Route>
        </Switch>
      </Layout>
      </Router> */}
    </>
  );
}

export default App;
