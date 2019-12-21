import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'

import rootReducer from '../redux/reducers'
import thunk from "redux-thunk";

import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';
import PageEmployeesLogin from './PageEmployeesLogin';




const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/">
          <PageEmployeesLogin></PageEmployeesLogin>
        </Route>
        <Route exact path="/list">
          <PageEmployeesList></PageEmployeesList>
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate></PageEmployeeCreate>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App
//midifications for Lab11 ex 2 was dobe earlier