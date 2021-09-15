import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import LastMealContainer from './containers/LastMealContainer';
import Blockparty from './containers/BlockPartyGame';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import DragDropContainer from './containers/DragDropContainer';
import { CgGames } from 'react-icons/cg';
import GamesContainer from './containers/Games';

const App = () => {

  const [allDinosaurs, setAllDinosaurs] = useState([]);
  const [userName, setUserName] = useState("");

  // sets userName from HomeContainer
  const saveUserName = (firstName) => {
    setUserName(firstName)
  }

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
          <Route path="/" exact>
            <HomeContainer saveUserName={saveUserName} allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/dinosaurs">
            <DinoContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/games" exact>
            {/* will be changed to GamesContainer once created */}
            <GamesContainer allDinosaurs={allDinosaurs} userName = {userName}/>
          </Route>
           {/* our games routes */}
          <Route path="/games/dragdrop">
              <DragDropContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/games/lastmeal">
            <LastMealContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/games/blockparty">
            <Blockparty/>
          </Route>
          <Route path="/games/quiz">
          <QuizContainer allDinosaurs={allDinosaurs}/>
          </Route>
        </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default App;
