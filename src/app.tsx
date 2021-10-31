import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Aulas from './pages/Aulas';
import Home from './pages/Home';
const QuestionDataContext  = React.createContext("");
/// provider pra dar os dados consumer pra consumir os dados
export function App() {
    return (
        <BrowserRouter>
        <QuestionDataContext.Provider value={""}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:category" exact component={Aulas} />
          </Switch>
        </QuestionDataContext.Provider>
      </BrowserRouter>
    )
}
