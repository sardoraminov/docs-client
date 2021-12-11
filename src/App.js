import React from "react";
import TextEditor from "./TextEditor";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import {v4 as uuidv4} from "uuid"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Redirect to={`/document/${uuidv4()}`} />
        </Route>
        <Route exact path="/document/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
