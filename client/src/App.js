import React, { useState, useEffect } from 'react';
import DinoContainer from './containers/DinoContainer';
import * as dinoService from './service';
import QuizContainer from './containers/QuizContainer';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import DragDrop from './components/DragDrop';

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

  //for DragDrog.js
  const handleOnDragEnd = (result) => {
    //to stop an error if the item is dragged outside the droppable area  
    if (!result.destination) return;
      //create a new array from the dinosaurs array
      const items = Array.from(allDinosaurs);
      //remove the item being moved from the original array
      const [reorderedItem] = items.splice(result.source.index, 1);
      //find the destination index so that we can put the item back into the array but at the index it's being moved to
      items.splice(result.destination.index, 0, reorderedItem);

      //update the state
      setAllDinosaurs(items);
    }

  return (
    <>
      <Router>
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
          <Route path="/dragdrop">
            <DragDrop allDinosaurs={allDinosaurs} handleOnDragEnd={handleOnDragEnd}/>
          </Route>
        </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default App;
