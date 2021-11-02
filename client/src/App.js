import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import DinoScrabble from './containers/DinoScrabble';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LastMealContainer from './containers/LastMealContainer';
import Blockparty from './containers/BlockPartyGame';
import './App.css';
import Layout from './components/Layout';
import DragDropContainer from './containers/DragDropContainer';
import { CgGames } from 'react-icons/cg';
import GamesContainer from './containers/Games';
import PageNotFound from './components/404-page';

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
        <Layout userName={userName} setUserName={setUserName}>
        <Switch>
    
          <Route path="/" exact>
            <HomeContainer saveUserName={saveUserName} allDinosaurs={allDinosaurs}/>
          </Route>

          <Route path="/dinosaurs" exact>
            <DinoContainer allDinosaurs={allDinosaurs}/>
          </Route>

          <Route path="/games" exact>
            <GamesContainer allDinosaurs={allDinosaurs} userName = {userName}/>
          </Route>

           {/* our games routes */}

          <Route path="/games/dragdrop" exact>
              <DragDropContainer allDinosaurs={allDinosaurs}/>
          </Route>

          <Route path="/games/lastmeal" exact>
            <LastMealContainer allDinosaurs={allDinosaurs}/>
           </Route>

          <Route path="/games/scrabble" exact>
              <DinoScrabble allDinosaurs={allDinosaurs}/>
          </Route>

          <Route path="/games/blockparty" exact>
            <Blockparty/>
          </Route>

          <Route path="/games/quiz" exact>
            <QuizContainer allDinosaurs={allDinosaurs}/>          
          </Route>

          <Route component={PageNotFound}>
          </Route>

        </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default App;
