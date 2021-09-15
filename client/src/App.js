import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import LastMealContainer from './containers/LastMealContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import DragDropContainer from './containers/DragDropContainer';
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
        <Layout>
        <Switch>
          <Route path="/" exact>
            <HomeContainer saveUserName={saveUserName} allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/dinosaurs" exact>
            <DinoContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/games" exact>
            {/* will be changed to GamesContainer once created */}
            <QuizContainer allDinosaurs={allDinosaurs}/>
          </Route>
           {/* our games routes */}
          <Route path="/games/dragdrop" exact>
              <DragDropContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route path="/games/lastmeal" exact>
            <LastMealContainer allDinosaurs={allDinosaurs}/>
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default App;
